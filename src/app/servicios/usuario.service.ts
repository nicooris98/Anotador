import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: string = '';
  usuarioLog: Usuario = {
    correo: '',
    password: ''
  }

  constructor() { }

  guardarUsuario(user: Usuario): void{
    localStorage.setItem(user.correo, user.password);
  }

  verificarUsuario(user: Usuario): boolean {//True todo bien. False todo mal
    if(localStorage.getItem(user.correo)==user.password){
      return true;
    }else{
      return false;
    }
  }

  setUsuarioLog(user: Usuario): void {
    this.usuarioLog = user;
  }

  getUsuarioLog(): Usuario {
    return this.usuarioLog;
  }

}
