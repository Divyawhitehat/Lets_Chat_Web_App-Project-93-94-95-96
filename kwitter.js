function adduser() 
{
    user_n = document.getElementById("u_n").value;
    
    localStorage.setItem("User Name",user_n);
    
    window.location = "kwitter_room.html";
}