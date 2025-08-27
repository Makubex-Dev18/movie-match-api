export function errorHandler(err,req,res,next){
    console.error('Error:',err.message);

    //si el error tiene status code,usarlo
    const statusCode=err.statusCode || err.status || 500;
    const message=err.message || 'Error interno del servidor';

    res.status(statusCode).json({
        error:message
    });
}