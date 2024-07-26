import joi from "joi";

export const adminValidate = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    .min(6)
    .required()
    .pattern(new RegExp('(?=.*[A-Z])(?=.*[0-9])')),
});
