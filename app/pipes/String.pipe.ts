import {Pipe} from 'angular2/core';

@Pipe({name: 'titleCase'})
export class titleCase {
  transform(value:string, args:string[]) : any {

    return value.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

  }
}


@Pipe({name: 'truncateString'})
export class truncateString {
  transform(value:any, args:string[]) : any {
    var value:any = value;
    var wordwise:any = args[0];
    var max:any = args[1]
    var tail:any = args[3]
    if (!value) return '';

    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
        value = value.substr(0, lastspace);
      }
    }

    return value + (tail || ' …');
  }
}


@Pipe({name: 'commaSeperated'})
export class commaSeperated {
  transform(value:string[], args:string[]) : any {
    return value.join(",");

  }
}
