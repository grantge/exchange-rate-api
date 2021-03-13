// DOM Elements
const first_currency = document.querySelector('.first_currency');
const second_currency = document.querySelector('.second_currency');
const first_amount = document.querySelector('.first_amount');
const second_amount = document.querySelector('.second_amount');

const btn = document.querySelector('.arrow_change');

// Main function (fetch data fron API and load DOM
function get_data() {
    const currency_one = first_currency.value;
    const currency_two = second_currency.value;

    fetch(`https://v6.exchangerate-api.com/v6/1b755fc020320184f84f423c/latest/${currency_one}`)
        .then(response => response.json())
        // .then(data => console.log(data.conversion_rates[second_currency_value]))
        .then(data => {
            const rate = data.conversion_rates[currency_two]
            second_amount.value = (first_amount.value * rate).toFixed(2); 
        })
        .catch(err => {
          console.log(err)
        });
}

// Events
first_currency.addEventListener('change', get_data);
second_currency.addEventListener('change', get_data);

first_amount.addEventListener('input', get_data);
second_amount.addEventListener('input', get_data);

// Change event
btn.addEventListener('click', () => {
    const change = first_currency.value;
    first_currency.value = second_currency.value;
    second_currency.value = change;

    get_data()
})
