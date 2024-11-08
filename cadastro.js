function nextStep() {
    const steps = document.querySelectorAll('fieldset');
    let currentStep = Array.from(steps).findIndex(step => step.style.display !== 'none');

    // Verifica se todos os campos obrigatórios da etapa atual estão preenchidos
    if (validateStep(currentStep)) {
        if (currentStep < steps.length - 1) {
            steps[currentStep].style.display = 'none'; // Esconde a etapa atual
            steps[currentStep + 1].style.display = 'block'; // Mostra a próxima etapa

            // Atualiza o cabeçalho com a nova parte
            const headers = [
                "Vamos criar sua conta...",
                "Agora vamos coletar seus dados pessoais...",
                "Por último, seu endereço..."
            ];
            document.getElementById('header').innerText = headers[currentStep + 1];
        }
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

function prevStep() {
    const steps = document.querySelectorAll('fieldset');
    let currentStep = Array.from(steps).findIndex(step => step.style.display !== 'none');

    if (currentStep > 0) {
        steps[currentStep].style.display = 'none'; // Esconde a etapa atual
        steps[currentStep - 1].style.display = 'block'; // Mostra a etapa anterior

        // Atualiza o cabeçalho com a nova parte
        const headers = [
            "Vamos criar sua conta...",
            "Agora vamos coletar seus dados pessoais...",
            "Por último, seu endereço..."
        ];
        document.getElementById('header').innerText = headers[currentStep - 1];
    }
}

// Valida se todos os campos obrigatórios da etapa atual estão preenchidos
function validateStep(stepIndex) {
    const steps = document.querySelectorAll('fieldset');
    const inputs = steps[stepIndex].querySelectorAll('input[required], select[required]');
    for (const input of inputs) {
        if (!input.value) {
            return false;
        }
    }
    return true;
}

// Validação do formulário ao enviar
document.getElementById('form').addEventListener('submit', function (event) {
    if (validateStep(steps.length - 1)) {
        alert("Cadastro finalizado com sucesso!");
        // Aqui você pode adicionar a lógica para enviar o formulário se necessário
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault(); // Evita o envio real do formulário
    }
});
