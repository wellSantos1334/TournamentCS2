import { ITournament, ITournamentCreate } from '../infra/interfaces/ITournament';

export interface ITournamentRepository {
   create(data: ITournamentCreate): Promise<ITournament>;
   findByName(name: string): Promise<ITournament | null>;
}
