import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-anotador',
  templateUrl: './anotador.component.html',
  styleUrls: ['./anotador.component.css']
})
export class AnotadorComponent implements OnInit {

  animes: string[] = [];


  constructor(
    private user: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  agregarLista(item: string): void {
    this.animes.push(item);
    var input = <HTMLInputElement>document.getElementById('nombre');
    input.value = '';
  }

  deleteItem(item: string): void {
    /* for (let index = 0; index < this.animes.length; index++) {
        if(this.animes[index]==item){
          delete this.animes[index];
        }
    } */
    const index = this.animes.indexOf(item, 0);
    if (index > -1) {
      this.animes.splice(index, 1);
    }
    console.log(this.animes.length)
  }

  generarLista(){
    var text = 'Lista de '+this.user.getUsuarioLog().correo+'\n';
    for (let index = 0; index < this.animes.length; index++) {
      text += 'Numero '+index+': '+this.animes[index]+'\n';
    }
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', this.user.getUsuarioLog().correo);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

}
