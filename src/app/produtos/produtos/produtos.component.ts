import { HttpClient } from '@angular/common/http';
import { ProdutosService } from './../services/produtos.service';
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

  //produtosService: ProdutosService;

  constructor(private produtosService: ProdutosService) {
    //segunda forma possível de inicialização: this.produtos = [];
    //this.produtosService = new ProdutosService();
    this.produtos = this.produtosService.list(); //essa inicialização pode ocorrer tanto no construtor quanto no OnInit do projeto, a depender de gosto pessoal.
  }

  ngOnInit(): void {
  }

}
