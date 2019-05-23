import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html'
})
export class CriarCursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos =  this.cursosService.getCursos();
  }
  onAddCurso(cursos: string) {
    this.cursosService.addCursos(cursos);
    console.log(cursos);
  }

}
