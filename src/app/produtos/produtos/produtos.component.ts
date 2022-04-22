import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [
    {_id: 1,
    nome: "Camiseta Básica",
    preco: 22.90,
    categoria: "Roupas",
    disponibilidade: true,}
  ];
  displayedColumns = ['nome', 'preco', 'categoria'];

  constructor() {
    //segunda forma possível de inicialização: this.produtos = [];
  }

  ngOnInit(): void {
  }

}
