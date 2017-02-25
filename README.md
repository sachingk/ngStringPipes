#ngPipes


ngPipes is a collection of most used pipes . 

###Title Case : Converts a given string to title case. 

{ { 'john smith' | titleCase } }     // John Smith
Truncate String : Truncates the string after specified length 

{ { 'john is a developer' | truncateString:true:9:"..." } }     // john is … 

Options
1st Argument : wordWise - Boolean - if true, cut only by words bounds 

2nd Argument : max - Number - max length of the text, cut to this number of chars 

3rd Argument : tail - String - add this string to the input string if the string was cut. 
Comma Seperated : Forms a comma seperated string for a given array 

stringList:string[]= ["Karan","Rohit","Santosh","Sachin","Chetan"] 

{ { stringList | commaSeperated } }     // Karan,Rohit,Santosh,Sachin,Chetan



