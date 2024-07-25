import Joi from "joi";

const adminValidation = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .required()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[0-9])")),
});

export const validateAdmin = (admin) => {
  return adminValidation.validate(admin);
};
