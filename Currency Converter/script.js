let selectContainer = document.querySelectorAll(".select-container")
let btn = document.querySelector("#btn")
let msg = document.querySelector("#msg")
let from = document.querySelector("#from")
let to = document.querySelector("#to")

for (select of selectContainer) {
    for (currencyCode in currencyToCountry) {
        let option = document.createElement("option");
        option.innerHTML = currencyCode;
        option.value = currencyCode;
        select.append(option);
        if (select.name == "from" && currencyCode == "USD") {
            option.selected = "selected";
        }
        if (select.name == "to" && currencyCode == "INR") {
            option.selected = "selected";
        }
    }
    select.addEventListener("change", (evt) => {
        changeFlage(evt.target)
    })
}

function changeFlage(element) {
    let curCod = element.value;
    let url = `https://flagsapi.com/${currencyToCountry[curCod]}/flat/64.png`
    let image = element.parentElement.querySelector("img");
    image.src = url;
}
async function exchangeRate(amount) {
    let url = `https://api.frankfurter.dev/v1/latest?from=${from.value}&to=${to.value}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data.rates.INR);
    let res = amount * data.rates[to.value];
    console.log(res);
    msg.innerHTML = `${amount}${from.value} = ${res}${to.value}`


}


btn.addEventListener("click", () => {
    let input = document.querySelector("#input-value")
    let amount = input.value;
    if (input.value == "" || input.value < 1) {
        amount = "1";
        input.value = "1";
    }
    exchangeRate(amount);
})

