/*
Import the internal libraries:
- CategoryController
*/
import { CategoryController } from '../controller';

// Create instance of CategoryController otherwise you can't use it
const categoryController = new CategoryController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/categories:
     *   get:
     *     tags:
     *       - Categories
     *     description: Returns all categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of categories
     */
    parentRouter.get('/categories', categoryController.index);
    /**
     * @swagger
     * /api/v1/categories/create:
     *   get:
     *     tags:
     *       - Category
     *     description: Returns specific viewmodel such as categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create artPiece
     */
    parentRouter.get('/categories/create/', categoryController.create);
    /**
     * @swagger
     * /api/v1/categories/{id}:
     *   get:
     *     tags:
     *       - Category
     *     description: Returns specific artPiece
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Category id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get artPiece by id
     */
    parentRouter.get('/categories/:id', categoryController.show);
    /**
     * @swagger
     * /api/v1/categories:
     *   artPiece:
     *     tags:
     *       - Category
     *     description: Save artPiece
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: artPiece
     *         description: Category object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved artPiece
     */
    parentRouter.post('/categories', categoryController.store);
    /**
     * @swagger
     * /api/v1/categories/{id}/edit:
     *   get:
     *     tags:
     *       - Category
     *     description: Returns specific viewmodel such as artPiece, categories
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Category id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit artPiece by id
     */
    parentRouter.get('/categories/:id/edit', categoryController.edit);
    /**
     * @swagger
     * /api/v1/categories/{id}:
     *   put:
     *     tags:
     *       - Category
     *     description: Update specific artPiece detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Category id
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
    parentRouter.put('/categories/:id', categoryController.update);
    /**
     * @swagger
     * /api/v1/categories/{id}:
     *   delete:
     *     tags:
     *       - Category
     *     description: Delete specific artPiece detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Category id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete artPiece
     */
    parentRouter.delete('/categories/:id', categoryController.destroy);
};

export default initializeEndpoints;
