export class persona{
    id?: number;
    nombreUsuario: String;
    password: String;
   

    constructor(nombreUsuario: String,password: String){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        
    }
}