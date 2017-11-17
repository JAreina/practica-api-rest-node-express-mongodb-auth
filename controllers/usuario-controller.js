"use strict";

const UsuarioModel = require("../models/usuario-model"),
  um = new UsuarioModel();

class UsuarioController {
  getTodo(req, res, next) {
    um.getTodo((err, docs) => {
      console.log(docs + "CONTROLLADOR");
      res.render("index", {
        titulo: "DATOS",
        data: docs
      });
    });
  }

  // controlador
  getUno(req, res, next) {
    let _id = req.params._id;
    console.log("ID GET UNO " + _id);

    um.getUno(_id, (err, docs) => {
      console.log(docs + " RECUPERA UNO");
      res.render("editar", {
        titulo: "EDITAR USUARIO",
        data: docs
      });
    });
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

    um.save(usuario, () => res.redirect("/"));
  }

  delete(req, res, next) {
    let _id = req.params._id;
    console.log("ID A BORRAR" + _id);
    um.delete(_id, () => res.redirect("/"));
  }

  addForm(req, res, next) {
    res.render("add", {
      // VISUALIZA LA VISTA ADD.PUG
      title: "AGREGAR USUARIO"
    });
  }


}

module.exports = UsuarioController;
