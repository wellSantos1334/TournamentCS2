import AppError from '@shared/errors/AppError';
import { ITeamCreate } from '../infra/interfaces/ITeam';
import { TeamRepository } from '../infra/typeorm/repositories/TeamRepository';
import { ITeamRepository } from '../interfaces/ITeamRepository';

export default class CreateTeamService {
   public async execute({ name }: ITeamCreate): Promise<ITeamCreate> {
      const teamRepository: ITeamRepository = new TeamRepository();
      const teamExists = await teamRepository.findByName(name);

      if (teamExists) {
         throw new AppError('Team already exists');
      }

      const createTeam = await teamRepository.create({
         name,
      });

      return createTeam;
   }
}
