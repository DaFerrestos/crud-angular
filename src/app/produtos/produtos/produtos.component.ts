import { ProdutosService } from './../services/produtos.service';
import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable <Produto[]>;
  displayedColumns = ['nome', 'preco', 'categoria'];

  //produtosService: ProdutosService;

  constructor(private produtosService: ProdutosService) {
    //segunda forma possível de inicialização: this.produtos = [];
    //this.produtosService = new ProdutosService();
    //essa inicialização pode ocorrer tanto no construtor quanto no OnInit do projeto, a depender de gosto pessoal.
    
    this.produtos$ = this.produtosService.list();
  }

  ngOnInit(): void {
  }

}
