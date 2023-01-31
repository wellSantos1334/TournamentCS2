import { Router } from 'express';
import TournamentsTeamsController from '../controllers/TournamentsTeamsController';

const managementRouter = Router();

const tournamentsTeamsController = new TournamentsTeamsController();

managementRouter.post('/', tournamentsTeamsController.create);

export default managementRouter;
