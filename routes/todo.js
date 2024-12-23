import express from 'express';
import todoController from './../controllers/todoController.js';
// create router
const router = express.Router();

// todo routes
router.get('/', todoController.getAllTodo);
router.patch('/', todoController.updateTodoCompleted);
router.post('/', todoController.addTodo);
export default router;
