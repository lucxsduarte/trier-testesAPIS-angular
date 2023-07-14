import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Valores } from '../../../model/valores';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.component.html',
  styleUrls: ['./procurar.component.scss']
})
export class ProcurarComponent {

  constructor(private http: HttpClient){}
  
  public valorBRL!: number;

  public valores!: Valores;

  private getData(): Observable<any> {
    let url = `https://api.hgbrasil.com/finance?format=json-cors&key=b9a87289`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public converter() {
    this.getData().subscribe((data) => {
      console.log('dados recebidos', data);

      this.valores = {
        valorBRL: this.valorBRL,
        valorUSA: this.valorBRL / data['results']['currencies']['USD']['buy'],
        valorEUR: this.valorBRL / data['results']['currencies']['EUR']['buy'],
        valorPeso: this.valorBRL / data['results']['currencies']['ARS']['buy'],
      };

      console.log('valores calculados', this.valores);
    });
  }
  
}
