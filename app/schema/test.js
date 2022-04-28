const Joi = require('@hapi/joi');

const list = {
  body: Joi.object({
    email: Joi.string().required(),
    pwd: Joi.string().required()
  })
};

module.exports = {
  list
};
