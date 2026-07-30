let btn = document.querySelector("#btn");
let inputBox = document.querySelector("#input-box");
let image = document.querySelector("#image");

btn.addEventListener("click", () => {
    if (inputBox.value.length > 0) {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`
        image.parentElement.classList.add('qrImage');
        image.classList.add("image2");
        inputBox.value = ""
    }
    else {
        let p = document.createElement("p");
        p.innerText = "please Enter Text or URL"
        p.classList.add("para");
        inputBox.after(p);
        setTimeout(() => {
            p.remove();
        }, 1000)
    }
})