function adduser() 
{
    user_n = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name",user_n);
    
    window.location = "kwitter_1room.html";
}