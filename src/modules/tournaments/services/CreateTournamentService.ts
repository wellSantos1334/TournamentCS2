import AppError from '@shared/errors/AppError';
import { ITournament, ITournamentCreate } from '../infra/interfaces/ITournament';
import { TournamentRepository } from '../infra/typeorm/repositories/TournamentRepository';
import { ITournamentRepository } from '../interfaces/ITournamentRepository';

class CreateTournamentService {
   public async execute({ name }: ITournamentCreate): Promise<ITournamentCreate> {
      const tournamentRepository: ITournamentRepository = new TournamentRepository();
      const tournamentExists = await tournamentRepository.findByName(name);

      if (tournamentExists) {
         throw new AppError('Tournament already exists!');
      }

      const createTournament = tournamentRepository.create({
         name,
      });

      // if (!createTournament) {
      //    throw new AppError('Erro ao criar tourneio');
      // }

      return createTournament;
   }
}

export default CreateTournamentService;
