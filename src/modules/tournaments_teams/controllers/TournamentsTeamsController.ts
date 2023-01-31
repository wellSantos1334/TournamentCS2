import { Request, Response } from 'express';
import CreateTournamentTeamService from '../services/CreateTournamentTeamService';

export default class TournamentsTeamsController {
   public async create(req: Request, res: Response): Promise<Response> {
      const { tournamentsId, teamsId } = req.body;

      const createTournamentTeamsService = new CreateTournamentTeamService();

      const addTeamOnTournament = await createTournamentTeamsService.execute({
         tournamentsId,
         teamsId,
      });

      return res.json({ msg: 'Team added on tournament', addTeamOnTournament });
   }
}
