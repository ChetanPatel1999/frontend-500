let btns = document.querySelectorAll(".btn");
let inputBox = document.querySelector("#input-box");

let str = "";


const btnHandler = (inputValue) => {


    if (inputValue == "AC") {
        str = "";
        inputBox.value = str;
    }
    else if (inputValue == "DEL")// "3+5+9"
    {
        str = str + ""
        str = str.substring(0, str.length - 1)
        inputBox.value = str;
    }
    else if (inputValue == "=") {
        str = eval(str);
        inputBox.value = str;
    }
    else {
        if (str.length > 0) {

            if ("+/%*-.".includes(str[str.length - 1]) && "+/%*-.".includes(inputValue)) {
                let newstr = ""
                for (let i = 0; i < str.length; i++) {
                    if (i == str.length - 1) {
                        newstr = newstr + inputValue;
                    }
                    else {
                        newstr = newstr + str[i];
                    }
                }
                console.log(newstr)
                str = newstr;
                inputBox.value = str;
            }
            else {
                str = str + inputValue;
                inputBox.value = str;
            }
        } else {
            str = str + inputValue;
            inputBox.value = str;
        }
    }


}

btns.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        let inputValue = evt.target.innerText;
        btnHandler(inputValue);
    })
})

