/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { Museum } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class MuseumController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const musea = await Museum.find().populate('__category').sort({ created_at: -1 }).exec();

            if (musea === undefined || musea === null) {
                throw new APIError(404, 'Collection for musea not found!');
            }
            return res.status(200).json(musea);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving musea', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Museum.findById(id).populate('__category').populate('__artPieces').exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Museum with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving musea', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            musea: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const categoryCreate = new Museum({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body,
            });
            const museum = await categoryCreate.save();
            return res.status(201).json(museum);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Museum!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const museum = await Museum.findById(id).exec();

            if (!museum) {
                throw new APIError(404, `Museum with id: ${id} not found!`);
            } else {
                const vm = {
                    museum,
                    musea: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Museum with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const categoryUpdate = req.body;
            const museum = await Museum.findOneAndUpdate({ _id: id }, categoryUpdate, { new: true }).exec();

            if (!museum) {
                throw new APIError(404, `Museum with id: ${id} not found!`);
            }
            return res.status(200).json(museum);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Museum with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            const museum = await Museum.findOneAndRemove({ _id: id });

            if (!museum) {
                throw new APIError(404, `Museum with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Museum with id: ${id}!` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Museum with id: ${id}!`, next);
        }
    }
}

export default MuseumController;
