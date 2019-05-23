import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './cursos.component.html'
  // providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  // cursosService: CursosService;

  constructor(private cursosService: CursosService) {  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

      CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
      // function (curso) {
      //   console.log(curso);
      // }
    );
  }

}
