import { ITeamCreate } from '@modules/teams/infra/interfaces/ITeam';
import CreateTeamService from '@modules/teams/service/CreateTeamService';
import { validation } from '@shared/middlewares/Validation';
import { Request, Response } from 'express';
import * as yup from 'yup';
import FindAllTeamService from '../service/FindAllTeamService';

export default class TeamController {
   public async create(req: Request, res: Response): Promise<Response> {
      const { name } = req.body;

      const createTeam = new CreateTeamService();

      const newTeam = await createTeam.execute({
         name,
      });

      return res.json({ msg: 'Team created successfull.', newTeam });
   }

   public async findAll(req: Request, res: Response): Promise<Response> {
      const findAll = new FindAllTeamService();

      const findAllTeams = await findAll.execute();

      return res.status(200).json(findAllTeams);
   }

   public Validation = validation(getSchema => ({
      body: getSchema<ITeamCreate>(
         yup.object().shape({
            name: yup.string().required(),
         }),
      ),
   }));
}
