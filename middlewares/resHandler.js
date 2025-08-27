export function responseOK(req, res, next) {
  //guardar  el metodo json original
  const originalJson = res.json;

  //sobrescribir res.sjon
  res.json = function (data) {
    //solo agregar "ok": true si el status es exitoso (2xx)
    if (res.statusCode >= 200 && res.statusCode < 300) {
      const response = { ok: true, ...data };
      return originalJson.call(this, response);
    }

    //si no es exitoso, enviar data original
    return originalJson.call(this, data);
  };
  next();
}
