import { BadRequestException, HttpStatus, ValidationPipe } from "@nestjs/common";
import { ValidationError } from "class-validator";

export const queryParamPipeLine = new ValidationPipe({
  transform: true,
  transformOptions: { enableImplicitConversion: true },
  forbidNonWhitelisted: true,
  exceptionFactory: (validationErrors: ValidationError[] = []) => {
    validationErrors.forEach((error) => {
      const queryConstraints = {};
      for (const [key, value] of Object.entries(error.constraints)) {
        queryConstraints[key] = value.replace(error.property, `${error.property} query param`);
      }
      error.constraints = queryConstraints;
    });
    const error = {
      message: validationErrors[0].constraints,
      error: 'Bad Request',
      statusCode: HttpStatus.BAD_REQUEST,
    };
    return new BadRequestException(error);
  },
});
