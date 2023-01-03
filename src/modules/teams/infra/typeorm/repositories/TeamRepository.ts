import { ITeamRepository } from '@modules/teams/interfaces/ITeamRepository';
import { AppDataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
import { ITeam, ITeamCreate } from '../../interfaces/ITeam';
import Team from '../entities/Team';

export class TeamRepository implements ITeamRepository {
   ormRepository: Repository<Team>;
   constructor() {
      this.ormRepository = AppDataSource.getRepository(Team);
   }

   async create(data: ITeamCreate): Promise<ITeam> {
      const createTeam = this.ormRepository.create(data);

      await this.ormRepository.save(createTeam);

      return createTeam;
   }

   async findByName(name: string): Promise<ITeam | null> {
      const findTeam = this.ormRepository.findOne({
         where: {
            name,
         },
      });

      return findTeam;
   }
}
