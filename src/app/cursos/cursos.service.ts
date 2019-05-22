import {Injectable} from '@angular/core';

@Injectable()

  export class CursosService {

    private cursos: string[] = ['Angular2', 'Java', 'Phonegap']

    constructor() {
        console.log('CursosService');
      }

    getCursos() {
      return  ['Angular2', 'Java', 'Php'];
    }
    addCursos(cursos: string) {
        this.cursos.push(cursos);
    }
  }
