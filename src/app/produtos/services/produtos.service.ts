import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produtos.json';


  constructor(private httpClient: HttpClient) { } //aqui se dá a injeção de dependência

  list() {
    return this.httpClient.get<Produto[]>(this.API)
    .pipe(
      first(),
      delay(6000),
      tap(produtos => console.log(produtos))
    );

  }
}
