import { ITournamentRepository } from '@modules/tournaments/interfaces/ITournamentRepository';
import { AppDataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
import { ITournament, ITournamentCreate } from '../../interfaces/ITournament';
import Tournament from '../entities/Tournament';

// add TournamentRepository to TournamentInterface
export class TournamentRepository implements ITournamentRepository {
   ormRepository: Repository<Tournament>;
   constructor() {
      this.ormRepository = AppDataSource.getRepository(Tournament);
   }

   // create new tournament with validation
   async create(data: ITournamentCreate): Promise<ITournament> {
      const createTournament = this.ormRepository.create(data);

      await this.ormRepository.save(createTournament);

      return createTournament;
   }

   // find a tournament by name
   async findByName(name: string): Promise<ITournament | null> {
      const findTournament = this.ormRepository.findOne({
         where: {
            name,
         },
      });

      return findTournament;
   }

   // Edit Tournament By Id
   async findById(id: number): Promise<ITournament | null> {
      const findTournament = this.ormRepository.findOne({
         where: {
            id,
         },
      });

      return findTournament;
   }

   // Find All Tournaments
   async findAll(): Promise<ITournament[]> {
      const findAll = this.ormRepository.find({
         order: {
            id: 'DESC',
         },
      });

      return findAll;
   }

   async update(id: number, name: string): Promise<ITournament> {
      const data = this.ormRepository.save({
         id,
         name,
      });

      return data;
   }
}
