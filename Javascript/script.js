 const daysoftheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 const malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
 const femalenames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]

 function validateform(){
     let year = document.getElementById("YearField").value;
     let month =document.getElementById("MonthField").value;
     let day = document.getElementById("DateField").value ;

     if (year ==""|| month==""|| day==""){
        console.log()
        alert("Please fill in all deatils")
        return false ;
     }else{
         getuserdetails()
     }
 }


