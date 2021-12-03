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
              nombre: '-Modelo 1-',
              precio: 750,
              imagen: '../multimedia/modelo1.jpg',
          },
          {
              id: 2,
              nombre: '-Modelo 2-',
              precio: 900,
              imagen: '../multimedia/modelo2.jpg',
          },
          {
              id: 3,
              nombre: '-Modelo 3-',
              precio: 750,
              imagen: '../multimedia/modelo3.jpg',
          },
          {
              id: 4,
              nombre: '-Modelo 4-',
              precio: 950,
              imagen: '../multimedia/modelo4.jpg',
          },
          {
              id: 5,
              nombre: '-Modelo 5-',
              precio: 900,
              imagen: '../multimedia/modelo5.jpg',
          },
          {
              id: 6,
              nombre: '-Modelo 6-',
              precio: 850,
              imagen: '../multimedia/modelo6.jpg',
          },
          {
              id: 7,
              nombre: '-Modelo 7-',
              precio: 850,
              imagen: '../multimedia/modelo7.jpg',
          },
          {
              id: 8,
              nombre: '-Modelo 8-',
              precio: 800,
              imagen: '../multimedia/modelo8.jpg',
          },
          {
              id: 9,
              nombre: '-Modelo 9-',
              precio: 750,
              imagen: '../multimedia/modelo9.jpg',
          },
          {
              id: 10,
              nombre: '-Modelo 10-',
              precio: 800,
              imagen: '../multimedia/modelo10.jpg',
          },
          {
              id: 11,
              nombre: '-Modelo 11-',
              precio: 650,
              imagen: '../multimedia/modelo11.jpg',
          },
          {
              id: 12,
              nombre: '-Modelo 12-',
              precio: 800,
              imagen: '../multimedia/modelo12.jpg',
          },

      ];
    }
  //boton finalizar compra
  $('#finalizarComprar').on('click', () => {
      alert("Gracias por tu compra. A disfrutar tu Abono!");
      });

  }

}


