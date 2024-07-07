const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string()
  .min(3)
  .max(30)
  .required(),

  price: Joi.number()
  .greater(0)
  .required(),

  category: Joi.string()
  .valid('electronics', 'clothing', 'furniture')
  .required(),

  description: Joi.string()
  .max(500)
  .optional(),

  inStock: Joi.boolean()
  .default(true)
  .required(),
});

module.exports = productSchema;
 