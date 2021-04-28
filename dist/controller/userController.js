"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    // login
    signin(req, res) {
        console.log(req.body);
        // res.send('Sign In!!!');
        res.render("partials/signinForm");
    }
    login(req, res) {
        console.log(req.body);
        // res.send('Datos recibidos!!!');
        //res.send({"Recibido":req.body});
        if (req.body.usuario == "Pepe" && req.body.password == "123456")
            res.redirect("./home");
        //res.redirect("https://www.google.com");
        else //Falta enviar el resultado estilizado a traves de una vista
            res.send({ "Usuario no registrado Recibido": req.body });
    }
    //registro
    signup(req, res) {
        console.log(req.body);
        //res.send('Sign Up!!!');
        res.render("partials/signupForm");
    }
    addUser(req, res) {
        console.log(req.body);
        res.send('Datos recibidos!!!');
    }
    home(req, res) {
        console.log(req.body);
        //res.send('Bienvenido!!!');
        res.render("partials/home");
    }
}
const userController = new UserController();
exports.default = userController;
//# sourceMappingURL=userController.js.map