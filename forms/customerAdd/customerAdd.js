btnAdd.onclick=function(){
  var query5="INSERT INTO customer (name, street, city, state, zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cll54497&pass=Laurenzo1!&database=cll54497&query=" + query5)
  if (req1.status == 200) { 
        if (req1.responseText == 500)
            alert("Successfully added!")
        else
            alert("The name failed to add.")
      } else {
        alert("Error: " + req1.status)    
      }
}