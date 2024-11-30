document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const addressInput = document.getElementById('address');
    const addressValue = addressInput.value;

    if (addressValue) {
        const addressList = document.getElementById('addressList');
        const listItem = document.createElement('li');
        listItem.textContent = addressValue;
        addressList.appendChild(listItem);

        addressInput.value = ''; // Limpa o campo de entrada
    }
});