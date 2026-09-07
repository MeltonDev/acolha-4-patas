/* 1. FILTRO DINÂMICO DE PETS DISPONÍVEIS */

const filtro = document.getElementById('filtro-tipo');
const cards = document.querySelectorAll('.pet-card');

filtro.addEventListener('change', () => {
    const valorSelecionado = filtro.value;

    cards.forEach(card => {
        const tipo = card.getAttribute('data-tipo');
        if (valorSelecionado === 'todos' || tipo === valorSelecionado) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
    });
});