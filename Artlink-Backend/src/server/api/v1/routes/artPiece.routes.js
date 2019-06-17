/*
Import the internal libraries:
- ArtPieceController
*/
import { ArtPieceController } from '../controller';

// Create instance of ArtPieceController otherwise you can't use it
const artPieceController = new ArtPieceController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/artPieces:
     *   get:
     *     tags:
     *       - ArtPieces
     *     description: Returns all artPieces
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of artPieces
     */
    parentRouter.get('/artPieces', artPieceController.index);
    /**
     * @swagger
     * /api/v1/artPieces/create:
     *   get:
     *     tags:
     *       - ArtPiece
     *     description: Returns specific viewmodel such as categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create artPiece
     */
    parentRouter.get('/artPieces/create/', artPieceController.create);
    /**
     * @swagger
     * /api/v1/artPieces/{id}:
     *   get:
     *     tags:
     *       - ArtPiece
     *     description: Returns specific artPiece
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: ArtPiece id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get artPiece by id
     */
    parentRouter.get('/artPieces/:id', artPieceController.show);
    /**
     * @swagger
     * /api/v1/artPieces:
     *   artPiece:
     *     tags:
     *       - ArtPiece
     *     description: Save artPiece
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: artPiece
     *         description: ArtPiece object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved artPiece
     */
    parentRouter.post('/artPieces', artPieceController.store);
    /**
     * @swagger
     * /api/v1/artPieces/{id}/edit:
     *   get:
     *     tags:
     *       - ArtPiece
     *     description: Returns specific viewmodel such as artPiece, categories
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: ArtPiece id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit artPiece by id
     */
    parentRouter.get('/artPieces/:id/edit', artPieceController.edit);
    /**
     * @swagger
     * /api/v1/artPieces/{id}:
     *   put:
     *     tags:
     *       - ArtPiece
     *     description: Update specific artPiece detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: ArtPiece id
     *         in: path
     *         required: true
     *         type: string
     *       - name: artPiece object
     *         description: artPiece data
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Update artPiece
     */
    parentRouter.put('/artPieces/:id', artPieceController.update);
    /**
     * @swagger
     * /api/v1/artPieces/{id}:
     *   delete:
     *     tags:
     *       - ArtPiece
     *     description: Delete specific artPiece detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: ArtPiece id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete artPiece
     */
    parentRouter.delete('/artPieces/:id', artPieceController.destroy);
};

export default initializeEndpoints;
