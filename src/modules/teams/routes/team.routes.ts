import TeamController from '@modules/teams/controllers/TeamController';
import { Router } from 'express';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.post('/', teamController.Validation, teamController.create);
teamRouter.get('/', teamController.findAll);

export default teamRouter;
