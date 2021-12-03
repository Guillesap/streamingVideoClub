import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.dEtalles').on('click', () => {
    $(".dAtos").slideToggle("fast");
      });

    }

}
