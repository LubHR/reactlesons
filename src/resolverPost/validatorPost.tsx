import Joi from "joi";

export const validatorPost = Joi.
object({
    title: Joi
        .string()
        .pattern(/^[a-zA-Z,\s\d\W]{10,}$/)
        .required()
        .messages({
            "string.pattern.base":"only words accepted",
            "string.required.base":"this input required"
            }),
    body: Joi
        .string()
        .pattern(/^[a-zA-Z,\s\d\W]{10,}$/)
        .required()
        .messages(
            {"string.pattern.base":"only words accepted","string.required.base":"this input required"}
        ),
    userId: Joi
        .number()
        .min(1)
        .max(10)
        .messages(
            {
                "number.min.base":"min userId 1",
                "number.max.base":"max userId 10",}
        ),
})