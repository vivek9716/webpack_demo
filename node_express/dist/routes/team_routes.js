"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutes = void 0;
const teamController_1 = require("../controllers/teamController");
class TeamRoutes {
    route(app) {
        app.get('/api/team', (req, res, next) => {
            console.log(req.rawHeaders);
            (0, teamController_1.getTeams)(req, res, next);
        });
    }
}
exports.TeamRoutes = TeamRoutes;
