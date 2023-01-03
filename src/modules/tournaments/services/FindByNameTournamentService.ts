import { ITournament, ITournamentCreate } from '../infra/interfaces/ITournament';
import Tournament from '../infra/typeorm/entities/Tournament';
import { TournamentRepository } from '../infra/typeorm/repositories/TournamentRepository';
import { ITournamentRepository } from '../interfaces/ITournamentRepository';

// export default class FindByNameTournamentService {
//    public async execute(): Promise<Tournament[]> {
//       const tournamentRepository: ITournamentRepository = new TournamentRepository();

//       const findTournament = tournamentRepository.findByName({
//          name,
//       });

//       return findTournament;
//    }
// }
