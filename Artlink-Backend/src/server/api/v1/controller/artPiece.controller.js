/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { ArtPiece } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class ArtPieceController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const { limit, skip } = req.query;
            let artPieces = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    populate: 'category',
                    sort: { created_at: -1 },
                };
                artPieces = await ArtPiece.paginate({}, options);
            } else {
                artPieces = await ArtPiece.find().populate('category').sort({ created_at: -1 }).exec();
            }

            if (artPieces === undefined || artPieces === null) {
                throw new APIError(404, 'Collection for artPieces not found!');
            }
            return res.status(200).json(artPieces);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving artPieces', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await ArtPiece.findById(id).populate('category').exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `ArtPiece with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving artPieces', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            categories: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const artPieceCreate = new ArtPiece({
                title: req.body.title,
                synopsis: req.body.synopsis,
                body: req.body.body,
                categoryId: req.body.categoryId
            });
            const artPiece = await artPieceCreate.save();
            return res.status(201).json(artPiece);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the ArtPiece!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const artPiece = await ArtPiece.findById(id).exec();

            if (!artPiece) {
                throw new APIError(404, `ArtPiece with id: ${id} not found!`);
            } else {
                const vm = {
                    artPiece,
                    categories: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the ArtPiece with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const artPieceUpdate = req.body;
            const artPiece = await ArtPiece.findOneAndUpdate({ _id: id }, artPieceUpdate, { new: true }).exec();

            if (!artPiece) {
                throw new APIError(404, `ArtPiece with id: ${id} not found!`);
            }
            return res.status(200).json(artPiece);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the ArtPiece with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            let artPiece = null;

            let { mode } = req.query;
            if (mode) {
                artPiece = await ArtPiece.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softdelete' ? Date.now() : null) }, { new: true });
            } else {
                mode = 'delete';
                artPiece = await ArtPiece.findOneAndRemove({ _id: id });
            }

            if (!artPiece) {
                throw new APIError(404, `ArtPiece with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the ArtPiece with id: ${id}!`, artPiece, mode });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the ArtPiece with id: ${id}!`, next);
        }
    }
}

export default ArtPieceController;
