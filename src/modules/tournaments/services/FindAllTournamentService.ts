import { ITournament } from '../infra/interfaces/ITournament';
import { TournamentRepository } from '../infra/typeorm/repositories/TournamentRepository';

export default class FindAllTournamentService {
   public async execute(): Promise<ITournament[]> {
      const tournamentRepository = new TournamentRepository();

      const findAll = await tournamentRepository.findAll();

      return findAll;
   }
}
