import {Component} from 'angular2/core';
import {titleCase,truncateString,commaSeperated} from './pipes/String.pipe';

@Component({
	selector: 'ngPipesExamples',
	templateUrl: './examples.html',
	pipes: [titleCase,truncateString,commaSeperated]
})
export class AppComponent {

stringList:string[]= ["Karan","Rohit","Santosh","Sachin","Chetan"]

}
