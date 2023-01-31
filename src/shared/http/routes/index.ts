import teamRouter from '@modules/teams/routes/team.routes';
import tournamentRouter from '@modules/tournaments/routes/tournament.routes';
import managementRouter from '@modules/tournaments_teams/routes/tournamentsteam.routes';
import { Router } from 'express';

const routes = Router();

// Tournament Routes
routes.use('/tournaments', tournamentRouter);

// Team Routes
routes.use('/teams', teamRouter);

// Management routes
routes.use('/managementTournament', managementRouter);

export default routes;
