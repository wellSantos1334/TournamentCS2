import { Router } from 'express';
import TournamentController from '../controllers/TournamentController';

const tournamentRouter = Router();

const tournamentController = new TournamentController();

tournamentRouter.post('/', tournamentController.Validation, tournamentController.create);
tournamentRouter.get('/', tournamentController.findAllTournament);
tournamentRouter.get('/select', tournamentController.findByName);
tournamentRouter.put('/:id', tournamentController.update);

export default tournamentRouter;
