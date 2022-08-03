var express = require('express');
var router = express.Router();


let bd = {  
  'usuario': 'abc',  
  'contrasenia': '123'  
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/**callback para la subruta */
router.post('/validate', function(req, res, next) {  
  let usuario = req.body.user;  //guardamos los datos que viene del usuario
  let contrasenia = req.body.password;  //pasa los datos al servidor
    
  console.log("usuario: ", usuario)  
  console.log("contraseña: ", contrasenia)  
    
  //Validación  
  if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {  
    res.redirect('/');  
  } else {  
    res.redirect('/login')  
  }  
    
});

module.exports = router;
