import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario = {
    correo: '',
    password: ''
  }

  constructor(
    private usuario: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.usuario.verificarUsuario(this.user)){
      console.log('Todo bien');
      this.usuario.setUsuarioLog(this.user);
    }else{
      alert('Datos incorrectos');
    }
  }

}
