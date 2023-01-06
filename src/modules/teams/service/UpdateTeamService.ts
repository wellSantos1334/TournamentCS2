import AppError from '@shared/errors/AppError';
import { ITeam } from '../infra/interfaces/ITeam';
import { TeamRepository } from '../infra/typeorm/repositories/TeamRepository';

export default class UpdateTeamService {
   public async execute({ id, name }: ITeam): Promise<ITeam> {
      const teamRepository = new TeamRepository();
      const dataTeam = await teamRepository.findById(id);
      const findByName = await teamRepository.findByName(name);

      if (!dataTeam) {
         throw new AppError('Team not found');
      }

      if (findByName) {
         throw new AppError('Team already exists');
      }

      dataTeam.name = name;

      await teamRepository.update(dataTeam);

      return dataTeam;
   }
}
