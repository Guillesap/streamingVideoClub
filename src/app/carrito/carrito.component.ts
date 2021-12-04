import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onload = function () {

      const Cuadros = [
          {
              id: 1,
              nombre: 'Abono Standard',
              precio: 2000,
          },
          {
              id: 2,
              nombre: 'Abono Premium',
              precio: 3000,
          },
          {
              id: 3,
              nombre: 'Abono Gold',
              precio: 4000,
          },
      ];
    }

  //boton finalizar compra
  $('#finalizarComprar').on('click', () => {
      alert("Gracias por tu compra. A disfrutar tu Abono!");
      });

  }

}


