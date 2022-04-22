import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'roupas': return 'vestuário';
      case 'acessórios': return 'penduricálios';
      case 'sapatos': return 'calçados';
    }
    return 'vestuário';
  }

}
