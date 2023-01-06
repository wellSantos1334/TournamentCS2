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

   async findById(id: number): Promise<ITeam | null> {
      const data = this.ormRepository.findOne({
         where: {
            id,
         },
      });

      return data;
   }

   async findAll(): Promise<ITeam[]> {
      const findAllTeams = this.ormRepository.find({
         order: {
            id: 'DESC',
         },
      });

      return findAllTeams;
   }

   async update({ id, name }: ITeam): Promise<ITeam> {
      const data = this.ormRepository.save({
         id,
         name,
      });

      return data;
   }

   async delete(id: number): Promise<unknown> {
      const data = this.ormRepository.delete(id);

      return data;
   }
}
