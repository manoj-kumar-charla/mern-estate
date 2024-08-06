export const errorHandler = (statusCode, message) => {
  const err = new Error();
  err.statusCode = statusCode;
  err.massage = message;
  // err.success = false;
  return err;
}