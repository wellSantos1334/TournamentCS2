import TeamController from '@modules/teams/controllers/TeamController';
import { Router } from 'express';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.post('/', teamController.Validation, teamController.create);
teamRouter.get('/', teamController.findAll);
teamRouter.put('/:id', teamController.Validation, teamController.update);
teamRouter.get('/select', teamController.findByName);

export default teamRouter;
