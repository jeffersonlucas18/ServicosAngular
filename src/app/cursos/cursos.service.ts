import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()

  export class CursosService {

    emitirCursoCriado = new EventEmitter<String>();
  static criouNovoCurso = new EventEmitter<String>();

    private cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

    constructor() {
        console.log('CursosService');
      }
    getCursos() {
      return this.cursos;
    }
    addCursos(curso: string) {
        this.cursos.push(curso);
      this.emitirCursoCriado.emit(curso);
      CursosService.criouNovoCurso.emit(curso);
    }
  }
