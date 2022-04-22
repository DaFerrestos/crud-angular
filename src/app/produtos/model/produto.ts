import { DecimalPipe } from "@angular/common";

export interface Produto {
  _id:number;
  nome: string;
  preco: number;
  categoria: string;
  disponibilidade: boolean;
}
