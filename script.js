const projetos = [
    {
        titulo: "Calculadora",
        descricao: "Uma calculadora funcional feita com HTML, CSS e JavaScript.",
        tecnologia: "JavaScript"
    },
    {
        titulo: "Lista de Tarefas",
        descricao: "Aplicativo para organizar tarefas do dia a dia.",
        tecnologia: "HTML, CSS, JS"
    },
    {
        titulo: "Landing Page",
        descricao: "Página de apresentação com design responsivo.",
        tecnologia: "HTML e CSS"
    }
];

function carregarProjetos() {
    const container = document.getElementById('lista-projetos');
    
    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'projeto-card';
        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <p><strong>Tecnologia:</strong> ${projeto.tecnologia}</p>
        `;
        container.appendChild(card);
    });
}

window.onload = carregarProjetos;