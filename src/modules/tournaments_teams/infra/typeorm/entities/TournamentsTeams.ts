import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('tournaments_teams')
class TournamentsTeams {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   tournamentsId: number;

   @Column()
   teamsId: number;
}

export default TournamentsTeams;
