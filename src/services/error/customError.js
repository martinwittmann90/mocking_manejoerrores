export class CustomError {
    static createError({ name , cause, message, code }) {
      const error =  Error(message, { cause });
      error.name = name;
      //error.cause = cause;
      error.code = code;
      throw error;
    }
  }