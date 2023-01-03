import { Request, response, Response } from 'express';
import CreateTournamentService from '../services/CreateTournamentService';
import FindAllTournamentService from '../services/FindAllTournamentService';
import * as yup from 'yup';

import { validation } from '../../../shared/middlewares/Validation';
import { ITournamentCreate } from '../infra/interfaces/ITournament';
import FindByNameTournamentService from '../services/FindByNameTournamentService';

export default class TournamentController {
   public async create(req: Request, res: Response): Promise<Response> {
      const { name } = req.body;

      const createTournament = new CreateTournamentService();

      const newTournament = await createTournament.execute({
         name,
      });

      return res.json({ msg: 'Tournament created successfull.', newTournament });
   }

   public async findAllTournament(req: Request, res: Response): Promise<Response> {
      const FindAllTournament = new FindAllTournamentService();

      const findAll = await FindAllTournament.execute();

      return res.json(findAll);
   }

   public async findByName(req: Request, res: Response): Promise<Response | null> {
      const { name } = req.body;
      const findTournamentService = new FindByNameTournamentService();

      const findByName = await findTournamentService.execute({ name });

      return res.json(findByName);
   }

   public Validation = validation(getSchema => ({
      body: getSchema<ITournamentCreate>(
         yup.object().shape({
            name: yup.string().required().min(3),
         }),
      ),
   }));
}
