import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  ngOnInit(): void {
    $('#finalizarComprar').on('click', () => {
      alert("Gracias por tu compra. A disfrutar tu Abono!");
      });
    }
  }



