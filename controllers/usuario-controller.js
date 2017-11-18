"use strict";

const UsuarioModel = require("../models/usuario-model"),
  um = new UsuarioModel();

class UsuarioController {
  getTodo(req, res, next) {
    return (req.session.username)
    ?
    um.getTodo((err, docs) => {
      console.log(docs + "CONTROLLADOR");
      res.render("index", {
        titulo: "DATOS",
        user: req.session.username,
        data: docs
      });
    })
    : errors.error401(req,res,next)
  }

  // controlador
  getUno(req, res, next) {
    let _id = req.params._id;
    console.log("ID GET UNO " + _id);

     return (req.session.username)
     ?
         um.getUno(_id, (err, docs) => {
         console.log(docs + " RECUPERA UNO");
         res.render("editar", {
         titulo: "EDITAR USUARIO",
         user : req.session.username,
         data: docs
          });
        })
      :  errors.error401(req,res,next)
  }

  //si no existe crea, si no actualiza
  save(req, res, next) {
    //datos que vienene del formulario
    let usuario = {
      _id: req.body._id || null,
      clave: req.body.clave,
      nombre: req.body.nombre,
      correo: req.body.correo,
      ciudad: req.body.ciudad
    };

    console.log(usuario);

    return (req.session.username)
         ? um.save(usuario, () => res.redirect("/usuarios"))
         :  errors.error401(req,res,next)
        }

  delete(req, res, next) {
    let _id = req.params._id;
    console.log("ID A BORRAR" + _id);

    return (req.session.username)
    ? um.delete(_id, () => res.redirect("/usuarios"))
    : errors.error401(req,res,next)
  }

  addForm(req, res, next) {
    return (req.session.username)
    ?
      res.render("add", {
       // VISUALIZA LA VISTA ADD.PUG
       title: "AGREGAR USUARIO",
       user : req.session.username
       })
    :  errors.error401(req,res,next)
      }


}

module.exports = UsuarioController;
