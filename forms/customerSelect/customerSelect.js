customerSelect.onshow=function(){
let check = inptEnterState.value
let query= "SELECT state FROM customer"

req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alb75529&pass=@gnesB2194&database=alb75529&query=" + query)
if (req1.status == 200) { 
results = JSON.parse(req1.responseText)
  console.log("The parsed JSON is " + results)
  
let message = ""
for (i = 0; i <= results.length - 1; i++)
message = message + results[i][0] + "\n"
console.log(message)
txtState1.value = message
}else
  NSB.MsgBox("Error code: " + req1.status)
}


let companyResults = ''
let companyTable = ''

btnShowcomp1.onclick=function(){
  let check = inptEnterState.value
  let query1 = "SELECT name FROM customer WHERE state = " + '"' + check + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alb75529&pass=@gnesB2194&database=alb75529&query=" + query)

if (req1.status == 200) {
companyTable = JSON.parse(req1.responseText)
for (i = 0; i< companyTable.length; i++)
 companyResults = companyResults + companyTable[i][0] + "/n"
 lblResults.value = companyResults
}
}