import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:any

  constructor(
    private productosService: ProductosService,
    private activatedRoute: ActivatedRoute
  ) { 
    const id= this.activatedRoute.snapshot.paramMap.get("id")
    console.log (id)
  
  if(id){
        this.productosService.getById(id)
    .subscribe(data=>{
      this.producto = data
  })
}
}
  ngOnInit(): void {
  }

}
