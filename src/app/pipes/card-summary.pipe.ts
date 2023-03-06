import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardSummary'
})
export class CardSummaryPipe implements PipeTransform {

  transform(value: string, limit?: number) {
    if(!value) return null;
        limit = limit? limit:250;

        if(limit>value.length){
            return value;
        }

        return value.substring(0,limit) + "...";
  }

}
