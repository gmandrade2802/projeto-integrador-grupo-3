function mostrarCurriculo(id) {
    const curriculo = document.getElementById(id);
    if (curriculo) {
        curriculo.style.display = 'block';
    }
}

function esconderCurriculo(id) {
    const curriculo = document.getElementById(id);
    if (curriculo) {
        curriculo.style.display = 'none';
    }
}

document.querySelectorAll('.btn-primary.botao').forEach(botao => {

    const curriculoId = botao.getAttribute('onclick').match(/'(.+)'/)[1];

    botao.addEventListener('mouseover', () => mostrarCurriculo(curriculoId));

    botao.addEventListener('mouseout', () => {
        setTimeout(() => {
            if (!botao.matches(':hover') && !document.getElementById(curriculoId).matches(':hover')) {
                esconderCurriculo(curriculoId);
            }
        }, 100);
    });

    const curriculo = document.getElementById(curriculoId);
    if (curriculo) {
        curriculo.addEventListener('mouseover', () => mostrarCurriculo(curriculoId));
        curriculo.addEventListener('mouseout', () => {
            setTimeout(() => {
                if (!botao.matches(':hover') && !curriculo.matches(':hover')) {
                    esconderCurriculo(curriculoId);
                }
            }, 100);
        });
    }
});

document.querySelectorAll('.curriculo').forEach(curriculo => {
    curriculo.style.display = 'none';
});
