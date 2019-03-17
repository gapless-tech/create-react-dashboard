import convert from 'joi-to-json-schema';
import joi from 'joi';
import { structure as api } from 'api-service';
import createModel from './create-model';
import { select } from '..';

const selectors = {
  getJSONSchemaById: () => (state, id) => {
    const structure = select.structures.getById(state, id);

    joi
      .compile({ tcsContent: 'string:description=Terms & Conditions,required' })
      .validate({ tcsContent: 1323 });

    const joiSchema = joi.object({
      name: joi
        .string()
        .required()
        .regex(/^\w+$/),
      description: joi
        .string()
        .optional()
        .default('no description provided'),
      a: joi
        .boolean()
        .required()
        .default(false),
      b: joi.alternatives().when('a', {
        is: true,
        then: joi.string().default('a is true'),
        otherwise: joi.number().default(0)
      })
    });

    window.joi = joi;
    window.structure = structure;
    window.convert = convert;
    window.joiSchema = joiSchema;

    return (
      structure && {
        ...structure,
        schema: convert(joi.compile(structure.structure)),
        schema2: convert(joiSchema)
      }
    );
  }
};

export default createModel('structures', api, { selectors });
