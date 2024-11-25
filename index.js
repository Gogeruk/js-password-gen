import { InputController } from './src/controllers/InputController.js';

const controller = new InputController();

controller.input().catch(error => {
    console.error(error);
});