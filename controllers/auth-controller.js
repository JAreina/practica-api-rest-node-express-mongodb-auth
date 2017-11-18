"use strict";

const AuthModel = require("../models/auth-model"),
  am = new AuthModel();
const errors = require('../middlewares/errors');

  class AuthController{
      index(req,res,next){
                 if(req.session.username){
                         res.redirect('/usuarios');
             
                 }else{
                        res.render('login-form',{
                                title: "AUTENTICACION",
                                message: req.query.message
                        })
                 }
      }

      logInGet(req,res,next){
               res.redirect('/');
              }
      logInPost(req,res,next){
           let user = {
                   username : req.body.username,
                   password: req.body.password
           };
           console.log(user);

           am.getUser(user,(docs)=>{
                  req.session.username = (docs !=null) ? user.username : null;

                  console.log(req.session, '..........' ,docs);
                  return (req.session.username) ? res.redirect('/usuarios') : errors.error401(req,res,next)
           });
              }




      signInGet(req,res,next){
                res.render('signin-form',{title : "Registro usuario"})
              }



      signInPost(req,res,next){
           let user ={
                   user_id: 0,
                   username : req.body.username,
                   password: req.body.password
           };
           console.log("SIGINPOST "+user);


           am.setUser(user, (docs)=>{
                   res.redirect(`/?message=El usuario ${user.username} ha sido creado`);
           });
              }


      logOut(req,res,next){
         req.session.destroy((err)=>{
                 return (err) 
                            ? errors.error500(req,res,next) 
                            : res.redirect('/');
         });
              }
  }

  module.exports = AuthController;