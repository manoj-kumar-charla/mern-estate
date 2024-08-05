export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 550;
  const massage = error.errorResponse.errmsg || "Internal Server Error";
  res.status(statusCode).json({
    success : false,
    statusCode,
    massage
  });
}