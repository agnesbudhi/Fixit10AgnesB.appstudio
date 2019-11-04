let names = []
let results = ""



customerUpdate.onshow=function(){
  let query3= "SELECT * FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alb75529&pass=@gnesB2194&database=alb75529&query=" + query3)
  
  if (req1.status == 200) {
     names = JSON.parse(req1.responseText)
           lblName1.value = names
    }
}


btnUpdate.onclick=function(){
  let oldName=inptUpdate.value
  let newName=inptNew.value
  let queryUpdate= "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=alb75529&pass=@gnesB2194&database=alb75529&query=" + queryUpdate)
  if (req1.status == 200) { 
        if (req1.responseText == 500)    
            inptResults.value=`You have changed the name ${oldName}`
        else
            inptResults.value=`There was a problem changing  ${oldName}  from the database.`
      } else { 
        inptResults.value = "Error " + req1.status;
      }
}



btnResults.onclick=function(){
  let lblName1.value = ''
      let queryUpdated = "SELECT name FROM customer"
          req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + queryUpdated)

    if (req1.status == 200) { 
            updatedTable = JSON.parse(req1.responseText)
            lblName1.value = updatedTable
}
}