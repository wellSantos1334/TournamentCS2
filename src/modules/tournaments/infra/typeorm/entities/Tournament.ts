import Team from '../../../../teams/infra/typeorm/entities/Team';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('tournaments')
class Tournament {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   name: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}

export default Tournament;
