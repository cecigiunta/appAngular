import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {Productos} from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  isLogin: boolean= false;
  @Input()
  data!:Productos

  @Output()
  reload = new EventEmitter

  constructor(
    private auth: AuthService
  ) { 
    this.auth.isAuthenticate()
    .subscribe(data => {
      this.isLogin = data
    })
  }

  ngOnInit(): void {
  }

  eliminar () {
    this.reload.emit()
  }

}
