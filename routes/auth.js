

const {Router}=require("express");
const { check } = require("express-validator");
const { crearUsuario,login,renewToken } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router=Router();
router.post("/new",[
    check("nombre","el nombre es obligatorio").not().isEmpty(),
    check("email","el correo es obligatorio").isEmail(),
    check("password","el password es obligatorio").not().isEmpty(),
   validarCampos
],crearUsuario);
router.post("/",[
    check("email","el correo es obligatorio").isEmail(),
    check("password","el password es obligatorio").not().isEmpty(),
],login);
//validarJWT
router.get("/renew",validarJWT,renewToken);


module.exports=router;