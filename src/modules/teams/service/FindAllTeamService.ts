import { ITeam } from '../infra/interfaces/ITeam';
import { TeamRepository } from '../infra/typeorm/repositories/TeamRepository';

export default class FindAllTeamService {
   public async execute(): Promise<ITeam[]> {
      const teamRepository = new TeamRepository();
      const findAll = await teamRepository.findAll();

      return findAll;
   }
}
