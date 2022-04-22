import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { } //aqui se dá a injeção de dependência

  list(): Produto[] {
    return [
      {
        _id: 1,
        nome: "Camiseta Básica",
        preco: 22.90,
        categoria: "Roupas",
        disponibilidade: true,
      }
    ];
  }

}
