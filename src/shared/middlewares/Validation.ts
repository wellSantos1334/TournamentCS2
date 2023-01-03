import { RequestHandler } from 'express';
import { SchemaOf, ValidationError } from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query';

type TGetSchema = <T>(schema: SchemaOf<T>) => SchemaOf<T>;

// I changed "any" for "unknown"
type TAllSchemas = Record<TProperty, SchemaOf<unknown>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = getAllSchemas => async (req, res, next) => {
   const schemas = getAllSchemas(schema => schema);
   const errorsResult: Record<string, Record<string, string>> = {};

   Object.entries(schemas).forEach(([key, schema]) => {
      try {
         // use abortEarly to take all errors before appear
         schema.validateSync(req[key as TProperty], { abortEarly: false });
      } catch (err) {
         const yupError = err as ValidationError;
         // certifies that the data received are string
         const validationErrors: Record<string, string> = {};

         // concat error quantity and messages
         yupError.inner.forEach(error => {
            // check if error.path is undefined
            if (!error.path) return;
            validationErrors[error.path] = error.message;
         });
         errorsResult[key] = validationErrors;
      }
   });
   if (Object.entries(errorsResult).length === 0) {
      return next();
   } else {
      return res.status(400).json({ errors: errorsResult });
   }
};
