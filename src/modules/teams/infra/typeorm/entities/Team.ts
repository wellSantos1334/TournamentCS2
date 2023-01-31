// import Tournament from '../../../../tournaments/infra/typeorm/entities/Tournament';
import {
   Column,
   CreateDateColumn,
   Entity,
   JoinTable,
   ManyToMany,
   PrimaryGeneratedColumn,
   UpdateDateColumn,
} from 'typeorm';

@Entity('teams')
class Team {
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   name: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}

export default Team;
