'use strict';


class Errors{
    
    error401(req, res, next) {
        let err = new Error();
        err.status = 401;
        err.statusText = "No autorizado";
    
        res.render("error", { error: err });
      }
      error404(req, res, next) {
        var err = new Error();
        err.status = 404;
        err.statusText = "NOT FOUND";
    
        res.render("error", { error: err });
      }
      error500(req, res, next) {
        let err = new Error();
        err.status = 500;
        err.statusText = "Error Interno";
    
        res.render("error", { error: err });
      }

}
// exportar una instacia de la clase
module.exports=new Errors();