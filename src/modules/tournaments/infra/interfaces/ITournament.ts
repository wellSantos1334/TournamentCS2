export interface ITournament {
   id?: number;
   name: string;
}

export type ITournamentCreate = Omit<ITournament, 'id'>;
