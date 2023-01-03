import { ITeam, ITeamCreate } from '../infra/interfaces/ITeam';

export interface ITeamRepository {
   create(data: ITeamCreate): Promise<ITeam>;
   findByName(name: string): Promise<ITeam | null>;
}
