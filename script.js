let alert_box = document.getElementById("alert_box");
let todo = document.getElementById("todo");
let form = document.getElementById("form");

let black_screen = document.getElementById("black_screen");
let alert_screen = document.getElementById("alert_screen");

let alert_box_screen = document.getElementById("alert_box_screen")
let todo_screen = document.getElementById("todo_screen")
let form_screen = document.getElementById("form_screen")

let data_show = document.getElementById("data_show")

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let myform = document.getElementById("myform")



let data_list = []

function tab_reset() {
    alert_box.className = "non_active";
    todo.className = "non_active";
    form.className = "non_active";

    alert_box_screen.style.display = "none";
    todo_screen.style.display = "none";
    form_screen.style.display = "none";
}

function alert_click() {
    tab_reset();
    alert_box.className = "active"
    alert_box_screen.style.display = "flex"
}

function todo_click() {
    tab_reset();
    todo.className = "active"
    todo_screen.style.display = "flex"
}

function form_click() {
    tab_reset();
    form.className = "active"
    form_screen.style.display = "flex"
}

//open dialog
function open_dialog() {
    black_screen.style.display = "block";
    alert_screen.style.display = "flex"

}

//close dialog
function close_dialog() {
    black_screen.style.display = "none";
    alert_screen.style.display = "none"
}

function show_data(){
    console.log(data_list)
    let html_data = ""
    data_list.forEach(function(item,index){
       html_data += '<li>' + item + '<i class="fa-solid fa-trash-can" onclick="delete_data('+index+')" style="color: #ad0b0b;"></i>'+ '</li>'
      
    })
    //alert(data_list)
    data_show.innerHTML = '<ul class="todo_data">'+html_data+'</ul>';
}

function add_data(data){
    data_list.push(data)
    show_data()
    get_data.value = ""
}

function delete_data(index){
    data_list.splice(index,1)
    show_data()
    //console.log(data_list)
}

function filter_data(data){
    //console.log(data)
    let data_filter_list = []
    data_filter_list = data_list.filter(function(item){
        return item.includes(data);
    })

    // console.log(data_filter_list)

    let html_data = ""
    data_filter_list.forEach(function(item,index){
        html_data += '<li>' + item + '<i class="fa-solid fa-trash-can" onclick="delete_data('+index+')" style="color: #ad0b0b;"></i>'+ '</li>'
     })
     //alert(data_list)
     data_show.innerHTML = '<ul class="todo_data">'+html_data+'</ul>';

}

//for form input testing the data value
myform.addEventListener("submit",(e)=>{
    e.preventDefault()
  
    if(name.value == '' || name.value == null){
        name.className = "error_input"
        name_error.style.display = "inline-block"
    }

    if(email.value == '' || email.value == null){
        email.className = "error_input"
        email_error.style.display = "inline-block"
    }

    if(password.value.length < 6 ){
        password.className = "error_input"
        password_error.style.display = "inline-block"
    }
});

//clean current empty state
name.addEventListener("input",()=>{
    name.className = ""
    name_error.style.display = "none"
})

//clean current empty state
email.addEventListener("input",()=>{
    email.className = ""
    email_error.style.display = "none"
})

//clean current empty state
password.addEventListener("input",()=>{
    password.className = ""
    password_error.style.display = "none"
})