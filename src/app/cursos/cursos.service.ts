import {EventEmitter, Injectable, Output} from '@angular/core';
import {LogService} from '../shared/log.service';

@Injectable()

  export class CursosService {

    emitirCursoCriado = new EventEmitter<String>();
  static criouNovoCurso = new EventEmitter<String>();

    private cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

    constructor(private logService: LogService) {
        console.log('CursosService');
      }
    getCursos() {
      return this.cursos;
      this.logService.Log('Obtendo lista de cursos');
    }
    addCursos(curso: string) {
        this.cursos.push(curso);
      this.emitirCursoCriado.emit(curso);
      CursosService.criouNovoCurso.emit(curso);
      this.logService.Log(`Criando Novo Curso ${curso}`);
    }
  }
