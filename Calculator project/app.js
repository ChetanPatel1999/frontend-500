let btn = document.querySelectorAll(".btn");
let inputBox = document.querySelector("#input-box");

let str = "";
btn.forEach((bt) => {
    bt.addEventListener("click", (evt) => {
        let inputValue = evt.target.innerText;

        if (inputValue == "AC") {
            str = "";
            inputBox.value = str;
        }
        else if (inputValue == "DEL") {
               
        }
        else if (inputValue == "=") {
            str = eval(str);
            console.log(typeof str)
            inputBox.value = str;
        }
        else {
            str = str + inputValue;
            inputBox.value = str;
        }


    })
})