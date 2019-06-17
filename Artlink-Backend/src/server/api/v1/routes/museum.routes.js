/*
Import the internal libraries:
- MuseumController
*/
import { MuseumController } from '../controller';

// Create instance of MuseumController otherwise you can't use it
const museumController = new MuseumController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/musea:
     *   get:
     *     tags:
     *       - Musea
     *     description: Returns all musea
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of musea
     */
    parentRouter.get('/musea', museumController.index);
    /**
     * @swagger
     * /api/v1/musea/create:
     *   get:
     *     tags:
     *       - Museum
     *     description: Returns specific viewmodel such as musea
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create artPiece
     */
    parentRouter.get('/musea/create/', museumController.create);
    /**
     * @swagger
     * /api/v1/musea/{id}:
     *   get:
     *     tags:
     *       - Museum
     *     description: Returns specific artPiece
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Museum id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get artPiece by id
     */
    parentRouter.get('/musea/:id', museumController.show);
    /**
     * @swagger
     * /api/v1/musea:
     *   artPiece:
     *     tags:
     *       - Museum
     *     description: Save artPiece
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: artPiece
     *         description: Museum object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved artPiece
     */
    parentRouter.post('/musea', museumController.store);
    /**
     * @swagger
     * /api/v1/musea/{id}/edit:
     *   get:
     *     tags:
     *       - Museum
     *     description: Returns specific viewmodel such as artPiece, musea
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Museum id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit museum by id
     */
    parentRouter.get('/musea/:id/edit', museumController.edit);
    /**
     * @swagger
     * /api/v1/musea/{id}:
     *   put:
     *     tags:
     *       - Museum
     *     description: Update specific artPiece detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Museum id
     *         in: path
     *         required: true
     *         type: string
     *       - name: nlog object
     *         description: museum data
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Update museum
     */
    parentRouter.put('/musea/:id', museumController.update);
    /**
     * @swagger
     * /api/v1/musea/{id}:
     *   delete:
     *     tags:
     *       - Museum
     *     description: Delete specific museum
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Museum id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete museum
     */
    parentRouter.delete('/musea/:id', museumController.destroy);
};

export default initializeEndpoints;
