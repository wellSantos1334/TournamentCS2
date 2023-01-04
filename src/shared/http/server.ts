import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '../../TranslationsYup';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
   console.log(error);
   if (error instanceof AppError) {
      return res.status(error.statusCode).json({
         status: 'error',
         message: error.message,
      });
   }

   return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
   });
});

app.listen(process.env.PORT || 4445, () => {
   console.log(`Servidor rodando na porta ${process.env.PORT || 4445} PORT`);
});
