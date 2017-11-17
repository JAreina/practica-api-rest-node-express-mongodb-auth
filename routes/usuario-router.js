"use strict";
const UsuarioController= require('../controllers/usuario-controller'),
         express = require('express'),
         router = express.Router(),
          uc = new UsuarioController();

// RUTAS
// middelawwre paramatros:  PETICION, RESPUESTA Y NEXT
router
          .get('/usuarios', uc.getTodo )
         .get('/agregar',uc.addForm)
          .post('/usuarios', uc.save)
           .get('/editar/:_id', uc.getUno)
          .put('/actualizar/:_id', uc.save)
        .delete('/eliminar/:_id', uc.delete)
         ;


module.exports=router;