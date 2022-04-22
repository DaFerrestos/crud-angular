import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ProdutosService } from './../services/produtos.service';
import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos$: Observable <Produto[]>;
  displayedColumns = ['nome', 'preco', 'categoria'];

  //produtosService: ProdutosService;

  constructor(private produtosService: ProdutosService,
    public dialog: MatDialog) {
    //segunda forma possível de inicialização: this.produtos = [];
    //this.produtosService = new ProdutosService();
    //essa inicialização pode ocorrer tanto no construtor quanto no OnInit do projeto, a depender de gosto pessoal.

    this.produtos$ = this.produtosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar!');
        return of([])
      })
    );
  }

  onError(errorMessage:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }


  ngOnInit(): void {
  }

}
