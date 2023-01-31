import { ITeam } from '@modules/teams/infra/interfaces/ITeam';
import { ITournament } from '@modules/tournaments/infra/interfaces/ITournament';
import { ITournamentsTeams, ITournamentsTeamsCreate } from '../infra/interfaces/ITournamentTeams';

export interface ITournamentsTeamsRepository {
   create(data: ITournamentsTeamsCreate): Promise<ITournamentsTeams>;
   // findByTeamName(name: string): Promise<ITeam>;
   // findByTournamentName(name: string): Promise<ITournament>;
}
