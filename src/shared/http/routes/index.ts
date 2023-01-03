import teamRouter from '@modules/teams/routes/team.routes';
import tournamentRouter from '@modules/tournaments/routes/tournament.routes';
import { Router } from 'express';

const routes = Router();

// Tournament Routes
routes.use('/tournaments', tournamentRouter);

// Team Routes
routes.use('/teams', teamRouter);

export default routes;
