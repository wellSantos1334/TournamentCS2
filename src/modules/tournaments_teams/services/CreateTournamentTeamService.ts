import { ITournamentsTeams, ITournamentsTeamsCreate } from '../infra/interfaces/ITournamentTeams';
import { TournamentTeamsRepository } from '../infra/typeorm/repositories/TournamentsTeamsRepository';

export default class CreateTournamentTeamService {
   public async execute({ tournamentsId, teamsId }: ITournamentsTeamsCreate): Promise<ITournamentsTeams> {
      const dataRepository = new TournamentTeamsRepository();

      const addTeamOnTournament = await dataRepository.create({
         tournamentsId,
         teamsId,
      });

      return addTeamOnTournament;
   }
}
