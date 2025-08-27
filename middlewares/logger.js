export function logRequest(req, res, next) {
  const timestamp = new Date();
  console.log(`${timestamp} => [${req.method}] ${req.url}`);
  next();
}
