export interface ITeam {
   id: number;
   name: string;
}

export type ITeamCreate = Omit<ITeam, 'id'>;
