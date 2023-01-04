import AppError from '@shared/errors/AppError';
import { ITournament, ITournamentOmitName } from '../infra/interfaces/ITournament';
import { TournamentRepository } from '../infra/typeorm/repositories/TournamentRepository';

export default class DeleteTournamentService {
   public async execute({ id }: ITournamentOmitName): Promise<ITournamentOmitName> {
      const tourmanetRepository = new TournamentRepository();
      const dataTournament = await tourmanetRepository.findById(id);

      if (!dataTournament) {
         throw new AppError('Tournament not found!');
      }

      await tourmanetRepository.delete(dataTournament.id);

      return dataTournament;
   }
}
