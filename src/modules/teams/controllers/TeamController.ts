import { ITeam, ITeamCreate } from '@modules/teams/infra/interfaces/ITeam';
import CreateTeamService from '@modules/teams/service/CreateTeamService';
import { validation } from '@shared/middlewares/Validation';
import { Request, Response } from 'express';
import * as yup from 'yup';
import FindAllTeamService from '../service/FindAllTeamService';
import FindByNameService from '../service/FindByNameService';
import UpdateTeamService from '../service/UpdateTeamService';

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

   public async update(req: Request<ITeam | any>, res: Response): Promise<Response> {
      const { id } = req.params;
      const { name } = req.body;
      const updateTeam = new UpdateTeamService();

      const updatedTeam = await updateTeam.execute({
         id,
         name,
      });

      return res.status(200).json({ msg: 'Team updated', updatedTeam });
   }

   public async findByName(req: Request, res: Response): Promise<Response> {
      const { name } = req.body;
      const findName = new FindByNameService();

      const findByName = await findName.execute(name);

      return res.status(200).json(findByName);
   }

   public Validation = validation(getSchema => ({
      body: getSchema<ITeamCreate>(
         yup.object().shape({
            name: yup.string().required().min(3),
         }),
      ),
   }));
}
