
    let fname = document.querySelector("#fname");
    let profession = document.querySelector("#profession");
    let age = document.querySelector("#age");
    let adding_user_button = document.querySelector("#add_user")
    let status_msg = document.querySelector(".status_msg");
    let allusers = [];
    status_msg.style.display = "none";
adding_user_button.addEventListener("click", ()=>{
   
    if(fname.value=="" || profession.value=="" || age.value==""){
        status_msg.innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !"
        status_msg.style.color ="red";
        status_msg.style.display = "block";
    }

    else{
        status_msg.innerHTML = "Success : Employee Added!"
        status_msg.style.color ="green";
        status_msg.style.display = "block";

      
        let user = {
            id: allusers.length+1,
            fname: fname.value,
            profession: profession.value,
            age: age.value
        }
        

        allusers.push(user);
        fname.value = "";
        profession.value = "";
        age.value = "";

        printing();
    }
});

function printing(){
    let str="";
    for(let user of allusers){
      str+=`
      <div class="card">
      <div class="all_details">
          <span>${user.id}.</span>
          <span>Name: ${user.fname}</span>
          <span>Profession: ${user.profession}</span>
          <span>Age: ${user.age}</span> 
      </div>
      <button id="del_btn" onclick="deleteUser(${user.id})">Delete User</button>
      </div>
      `
    };

    document.querySelector(".container").innerHTML = str;
}

function deleteUser(del_id){
    for(let i = 0; i < allusers.length; i++){
        if(allusers[i].id == del_id){
            allusers.splice(i, 1);
        }
    }
    let newid=1;
    for(let user of allusers){
        user.id = newid;
        newid++;
    }
    printing();
    checkEmpty();
}
function checkEmpty(){
    let applicants = document.querySelector(".container");

    if(applicants.innerHTML.trim()==""){

        applicants.innerHTML =  "<p>You have 0 Employees.</p>"
    }
    
};

checkEmpty();