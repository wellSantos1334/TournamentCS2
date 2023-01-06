import AppError from '@shared/errors/AppError';
import { ITeam } from '../infra/interfaces/ITeam';
import { TeamRepository } from '../infra/typeorm/repositories/TeamRepository';

export default class DeleteTeamService {
   public async execute(id: number): Promise<ITeam | any> {
      const teamRepository = new TeamRepository();
      const dataTeam = await teamRepository.findById(id);

      if (!dataTeam) {
         throw new AppError('Team not found');
      }

      await teamRepository.delete(dataTeam.id);

      return dataTeam;
   }
}
