import { Component, Input } from '@angular/core';
import { Valores } from '../../../model/valores';

@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.scss']
})
export class ValorComponent {

  @Input() valores!: Valores;

}
