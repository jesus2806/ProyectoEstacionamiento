import { Component, HostBinding, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuario.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/Usuario';
import { Vehiculo } from 'src/app/models/Vehiculo';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit{
  usuario: Usuario | null= {
    idUsuario: undefined,
    nombre: '',
    apeP: '',
    apeM: '',
    telefono: '',
    correo: '',
    password1: '',
    password2: '',
    created_at: new Date()
  };

  constructor(private authService: AuthService, private usuariosService: UsuariosService) {}

  ngOnInit() {
    var datos:any =this.authService.getCurrentUser();
    this.usuario = datos[0];  // Obtener la información del usuario 
  }
  getAct(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        console.log(res),
        this.usuario = res
      },
      rep => console.error
      );
  }

  editUser(id:string){
    console.log(id);
  }
}

