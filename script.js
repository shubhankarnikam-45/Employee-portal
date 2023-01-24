let emp_det=document.querySelector(".signup");
let name=emp_det.querySelector(".name");
let profession=emp_det.querySelector(".pro");
let age=emp_det.querySelector(".age");
// console.log(name)
// console.log(age)
// console.log(profession)

let arr=[];
let id=1;
emp_det.addEventListener("submit",addUser);
emp_det.addEventListener("submit", function(event){
      event.preventDefault()
    });
function addUser()
{
    let output=document.getElementsByClassName("output")[0];

    if(name.value!="" && profession.value!="" && age.value!="")
    {
        // obj = {id:1,name:"jack",profession:"developer",age:20}
        let obj={};
        obj["id"]=id++;
        obj["name"]=name.value;
        obj["profession"]=profession.value;
        obj["age"]=age.value;
        arr.push(obj);
        output.innerHTML="sucess";
        output.style.color="green";
        name.value="";
        profession.value="";
        age.value="";


        addTable(obj);        //code for adding the table.



    }
    else
    {
       output.innerHTML="problem"
       output.style.color="red"    
    }
   
}  


//code for adding data in table.

let div=document.createElement("div");
document.body.appendChild(div);
div.style.cssText="display:flex; flex-direction:column;"

// document.body.style.cssText="display:flex;"
let k=0;
let table=document.createElement("table");
document.body.appendChild(table);

let divForTableAndBtn=document.createElement("div");
divForTableAndBtn.appendChild(table);
divForTableAndBtn.appendChild(div);
document.body.appendChild(divForTableAndBtn);
divForTableAndBtn.style.cssText="display:flex; flex-direction:row;"
function addTable(obj)
{ 
        let tr=table.insertRow(-1);
        tr.setAttribute("class","k")
        let button=document.createElement("button");
        button.innerHTML="Delete User";
        button.setAttribute("id","k");
        div.appendChild(button);
        k++;
        button.addEventListener("click",deleteUser);
        for(let key in obj)
        {
            let td=tr.insertCell(-1);

            td.innerHTML=`${key}: ${obj[key]}`;
        }

  
    table.style.border="1px solid black"
 
}

function deleteUser(e)
{
    let id=e.target.id;
    let row=document.getElementsByClassName(id)[0]
    row.remove();
    let btn=document.getElementById(id)
    btn.remove();
}
//code for delete user.

