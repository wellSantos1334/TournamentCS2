import { ITournament, ITournamentOmitId } from '../infra/interfaces/ITournament';
import { TournamentRepository } from '../infra/typeorm/repositories/TournamentRepository';
import { ITournamentRepository } from '../interfaces/ITournamentRepository';

export default class FindByNameTournamentService {
   public async execute({ name }: ITournamentOmitId): Promise<ITournamentOmitId | null> {
      const tournamentRepository: ITournamentRepository = new TournamentRepository();

      const findTournament = await tournamentRepository.findByName(name);

      return findTournament;
   }
}
