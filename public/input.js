// let text = document.querySelector('#input');

// function checkCode (e) {
//     // console.log("checkCode", e);
//     if (e.key == "Enter") {
//         // console.log("checking the code");
//         if (document.querySelector ("input[type='text']").value === "code") {
//             // console.log("OPEN SESAME");
//             document.getElementById("scene1").style.visibility = "visible";
//         } else {
//             // console.log("NO GOOD");
//         }         
//     }
// }
// // text.addEventListener("EVENT", CODE-TO-DO-WHEN-EVENT-HAPPENDS);
// text.addEventListener("keydown", checkCode );
    
window.onload(function(){
    alert("turn phone horizonally");
    var gateway = localStorage.getItem('gateway');
    
    if (gateway){
        console.log('starting time');
    }
});

