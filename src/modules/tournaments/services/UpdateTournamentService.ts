import AppError from '@shared/errors/AppError';
import { ITournament } from '../infra/interfaces/ITournament';
import { TournamentRepository } from '../infra/typeorm/repositories/TournamentRepository';

export default class UpdateTournamentService {
   public async execute({ id, name }: ITournament): Promise<ITournament> {
      const tournamentRepository = new TournamentRepository();
      const dataTournament = await tournamentRepository.findById(id);
      const tournamentExists = await tournamentRepository.findByName(name);

      if (!dataTournament) {
         throw new AppError('Tournament not found!');
      }

      if (tournamentExists) {
         throw new AppError('Tournament already exists');
      }

      dataTournament.name = name;

      await tournamentRepository.update(dataTournament.id, dataTournament.name);

      return dataTournament;
   }
}
