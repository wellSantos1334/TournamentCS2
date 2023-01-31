import { ITeam } from '@modules/teams/infra/interfaces/ITeam';
import Team from '@modules/teams/infra/typeorm/entities/Team';
import { ITournamentsTeamsRepository } from '@modules/tournaments_teams/interfaces/ITournamentsTeamsRepository';
import { AppDataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
import { ITournamentsTeams, ITournamentsTeamsCreate } from '../../interfaces/ITournamentTeams';
import TournamentsTeams from '../entities/TournamentsTeams';

export class TournamentTeamsRepository implements ITournamentsTeamsRepository {
   ormRepository: Repository<TournamentsTeams>;
   teamRepository: Repository<Team>;
   constructor() {
      this.ormRepository = AppDataSource.getRepository(TournamentsTeams);
      this.teamRepository = AppDataSource.getRepository(Team);
   }

   async create(data: ITournamentsTeamsCreate): Promise<ITournamentsTeams> {
      const createTournamentTeams = this.ormRepository.create(data);

      await this.ormRepository.save(createTournamentTeams);

      return createTournamentTeams;
   }

   async findByTeamName(name: string): Promise<ITeam> {
      const teamId = await this.teamRepository.findOne({
         where: {
            name,
         },
      });

      const findByTeamName = await this.ormRepository.findOne({
         where: {
            teamsId: teamId?.id,
         },
      });

      return findByTeamName;
   }
}
