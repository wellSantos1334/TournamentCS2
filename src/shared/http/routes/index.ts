import tournamentRouter from '@modules/tournaments/routes/tournament.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/tournaments', tournamentRouter);

export default routes;
