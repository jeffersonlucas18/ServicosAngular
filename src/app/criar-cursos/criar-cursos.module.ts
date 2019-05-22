import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CursosService} from '../cursos/cursos.service';

import {CriarCursosComponent} from './criar-cursos.component';

@NgModule({
  declarations: [CriarCursosComponent],
  imports: [ CommonModule],
  exports: [CriarCursosComponent],
  providers: [CursosService]
})
export class CriarCursosModule { }
