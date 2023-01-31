export interface ITournamentsTeams {
   id: number;
   tournamentsId: number;
   teamsId: number;
}

export type ITournamentsTeamsCreate = Omit<ITournamentsTeams, 'id'>;
