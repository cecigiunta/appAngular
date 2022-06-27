import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productosAsync: any = []
  productosAwait: any = []
  productos:any=[]
  buscar: string ="Apple" 

  constructor(
    private productosService: ProductosService
  ) { 
    this.getAllProductos()
    this.productosAsync= this.productosService.getAllAsync()
  }

    getAllProductos() {
    this.productos= this.productosService.getAll(this.buscar)
    .subscribe ((data:any) =>{
      console.log (data)
      this.productos = data.results
    })


 /* EJEMPLO ASYNC AWAIT 
 this.getProductos()
  async getProductos(){
    try {
      const response:any = await this.productosService.getAllPromise()
      this.productosAwait = response.results
    }
    catch (e) {
      console.log (e)
    } */
  }
    
  
  ngOnInit(): void {
  }

}
