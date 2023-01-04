import { Router } from 'express';
import TournamentController from '../controllers/TournamentController';

const tournamentRouter = Router();

const tournamentController = new TournamentController();

tournamentRouter.post('/', tournamentController.tournamentValidation, tournamentController.create);
tournamentRouter.get('/', tournamentController.findAllTournament);
tournamentRouter.get('/select', tournamentController.findByName);
tournamentRouter.put('/:id', tournamentController.tournamentValidation, tournamentController.tournamentValidation);
tournamentRouter.delete('/:id', tournamentController.delete);

export default tournamentRouter;
