 let names = []
let results = ""


customerDelete.onshow=function(){
  let query3= "SELECT * FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query3)
  
  if (req1.status == 200) {
     names = JSON.parse(req1.responseText)
       for (i = 0; i < names.length; i++)
           results = results + names[i][1] + "\n"
            inptCustomer.value = results
    }
}

btnDelete.onclick=function(){
let deleteName = inptName.value
let found = false
    for (i = 0; i < names.length; i++) {
        if (deleteName == names[i][1])
            found = true
    }
if(found==false){
inptCompany.value = "The name is not in the database"
}else if(found == true){
  let query4 = "DELETE FROM customer WHERE name = " + '"' + deleteName + '"'
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query4)
  if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500)   
            inptCompany.value="You have successfully deleted the name " + deleteName
        else
            inptCompany.value="There was a problem deleting " + deleteName + " from the database."
      } else {
        // transit error
        inptCompany.value = "Error: " + req1.status;
        }
      }  
  }