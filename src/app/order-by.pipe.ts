
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform( value:any[], orderType:boolean): any[] {
    
    value.sort((a:any, b:any ) => {
      
      let t1 = a.name;
      let t2 = b.name;
      if( t1 == undefined && t2 == undefined ) return 0;//cheching for undefined values.
      if( t1 == undefined && t2 != undefined ) return orderType ? 1: -1;
      if( t1 != undefined && t2 == undefined ) return orderType ? -1: 1;
      if( t1 == t2) return 0;//equality check

      //checking for the lesser or greater value 
      return orderType ? (t1.toString().toLowerCase() > t2.toString().toLowerCase()? -1 :1):(t2.toString().toLowerCase() > t1.toString().toLowerCase()? -1 :1);
    });
    return value;//finally returning the sorted array .
  }
}
