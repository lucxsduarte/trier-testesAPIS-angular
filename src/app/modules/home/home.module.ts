import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProcurarComponent } from './components/converte-moeda/procurar/procurar.component';
import { ValorComponent } from './components/converte-moeda/valor/valor.component';


@NgModule({
  declarations: [
    FormComponent,
    TabelaComponent,
    HomeComponent,
    ProcurarComponent,
    ValorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
