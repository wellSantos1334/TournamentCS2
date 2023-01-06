import AppError from '@shared/errors/AppError';
import { ITeam } from '../infra/interfaces/ITeam';
import { TeamRepository } from '../infra/typeorm/repositories/TeamRepository';

export default class FindByNameService {
   public async execute(name: string): Promise<ITeam | null> {
      const teamRepository = new TeamRepository();
      const findByName = await teamRepository.findByName(name);

      if (!findByName) {
         throw new AppError('Team not found');
      }

      return findByName;
   }
}
