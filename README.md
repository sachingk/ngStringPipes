# ngPipes

<h3>String Pipes</h3><br />

<b style="font-size:15px;">Title Case</b> : Converts a given string to title case. <br /><br />
{ { 'john smith' | titleCase  } }    &nbsp;&nbsp;&nbsp; <i>   John Smith</i>

<br />

<b style="font-size:15px;">Truncate String</b> : Truncates the string after specified length  <br /><br />
{ { 'john is a developer' | truncateString:true:9:"..."  } }    &nbsp;&nbsp;&nbsp; <i>  john is …</i>

<br /><i>Options</i><br />
1st Argument : wordWise - Boolean -  if true, cut only by words bounds <br /><br />
2nd Argument : max - Number -  max length of the text, cut to this number of chars <br /><br />
3rd Argument : tail  - String -  add this string to the input string if the string was cut. <br />

<br />

<b style="font-size:15px;">Comma Seperated</b> : Forms a comma seperated string for a given array  <br /><br />
stringList:string[]= ["Karan","Rohit","Santosh","Sachin","Chetan"] <br /><br />
{ { stringList | commaSeperated  } }    &nbsp;&nbsp;&nbsp; <i>  Karan,Rohit,Santosh,Sachin,Chetan</i>


