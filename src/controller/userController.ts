import { Request, Response } from 'express';

class UserController {

	// login
	public signin(req: Request, res: Response) {
		console.log(req.body);
		// res.send('Sign In!!!');
		res.render("partials/signinForm");
	}
	public login(req: Request, res: Response) {
		console.log(req.body);
		// res.send('Datos recibidos!!!');
		//res.send({"Recibido":req.body});
		if(req.body.usuario=="Pepe"&&req.body.password=="123456")
			res.redirect("./home");
			//res.redirect("https://www.google.com");
		else//Falta enviar el resultado estilizado a traves de una vista
        	res.send({"Usuario no registrado Recibido":req.body});

	}

	//registro
	public signup(req: Request, res: Response) {
		console.log(req.body);
		//res.send('Sign Up!!!');
		res.render("partials/signupForm");
	}

	public addUser(req: Request, res: Response) {
		console.log(req.body);
		res.send('Datos recibidos!!!');
	}

	public home(req:Request,res:Response){
		console.log(req.body);
        //res.send('Bienvenido!!!');
		res.render("partials/home");
	}
}

const userController = new UserController();
export default userController;