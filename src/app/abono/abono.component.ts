import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abono',
  templateUrl: './abono.component.html',
  styleUrls: ['./abono.component.css']
})
export class AbonoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#sTandar').on('click', () => {
      alert("Estas por comprar el  Abono Standard, por $ 2.000,00.- mensuales. Finalizá tu compra en el botón verde ingresando tu tarjeta de crédito")
      });

     $('#pRemium').on('click', () => {
      alert("Estas por comprar el  Abono Premium, por $ 3.000,00.- mensuales. Finalizá tu compra en el botón verde ingresando tu tarjeta de crédito")
      });
    $('#gOld').on('click', () => {
      alert("Estas por comprar el  Abono Gold, por $ 4.000,00.- mensuales. Finalizá tu compra en el botón verde ingresando tu tarjeta de crédito")
      });
    }
  }


