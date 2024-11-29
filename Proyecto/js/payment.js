const planSelect = document.getElementById('plan');

planSelect.addEventListener('change', () => {
    const selectedPlan = planSelect.value;
    // Aquí puedes mostrar más detalles sobre el plan seleccionado, como una descripción o beneficios adicionales
    console.log('Plan selected: ', selectedPlan);
});