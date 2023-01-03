import { Router } from 'express';
import TournamentController from '../controllers/TournamentController';

const tournamentRouter = Router();

const tournamentController = new TournamentController();

tournamentRouter.post('/', tournamentController.Validation, tournamentController.create);

export default tournamentRouter;