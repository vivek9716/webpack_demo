"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
//import { UserController } from '../controllers/userController';
class TestRoutes {
    //private user_controller: UserController = new UserController();
    route(app) {
        app.post('/api/user', (req, res) => {
            //this.user_controller.create_user(req, res);
        });
        app.get('/api/user/:id', (req, res) => {
            //this.user_controller.get_user(req, res);
        });
        app.put('/api/user/:id', (req, res) => {
            //this.user_controller.update_user(req, res);
        });
        app.delete('/api/user/:id', (req, res) => {
            //this.user_controller.delete_user(req, res);
        });
    }
}
exports.TestRoutes = TestRoutes;
