import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  correo: string = '';
  password: string = '';
  confirmPassword: string = '';

  user: Usuario = {
    //nombre: '',
    //apellido: '',
    correo: '',
    //nick: '',
    password: ''
  }

  constructor(
    private usuario: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    if(this.password==this.confirmPassword && this.correo!=''){
      console.log('Registro exitoso');
      this.user.correo = this.correo;
      this.user.password = this.password;
      console.log(JSON.stringify(this.user));
      this.usuario.guardarUsuario(this.user);
    }else{
      alert('Datos Incorrectos');
    }
  }

}
