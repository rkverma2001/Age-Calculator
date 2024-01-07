const date = document.getElementById("dateofbirth");
let button = document.getElementById("dobtn");
const out = document.getElementById("output");
let mili = 0;
button.addEventListener("click", (e)=> {
    if(date.value == "") {
        alert("Please enter your birthday");
        return;
    }
    const bday = new Date(date.value);
    const today = new Date();
    const diff = today.getTime() - bday.getTime();
    mili = Math.floor(diff/(365*24*60*60*1000));
    // console.log(mili);
    out.innerHTML = `Your age is ${mili} years old`;
});


