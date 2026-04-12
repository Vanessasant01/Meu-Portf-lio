// Lista de projetos VAZIA - não aparece nada agora
// Para adicionar depois, é só inserir objetos nesse formato:
// {
//     titulo: "Nome do Projeto",
//     descricao: "Descrição detalhada",
//     tecnologia: "Tecnologias usadas"
// }
const projetos = [];

// Função que carrega os projetos dinamicamente
function carregarProjetos() {
    // Seleciona a seção de projetos do seu index.html
    const secaoProjetos = document.getElementById('projetos');
    
    // Verificação de segurança
    if (!secaoProjetos) {
        console.error("Seção de projetos não encontrada!");
        return;
    }

    // Remove container antigo se existir
    let containerExistente = secaoProjetos.querySelector('#lista-projetos');
    if (containerExistente) {
        containerExistente.remove();
    }

    // Cria container vazio
    const container = document.createElement('div');
    container.id = 'lista-projetos';
    container.className = 'projetos-container';
    container.style.marginTop = '20px';

    // Insere projetos apenas se houver itens na lista
    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'projeto'; // Mesma classe das habilidades
        card.style.marginTop = '20px';
        
        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <p><strong>Tecnologia:</strong> ${projeto.tecnologia}</p>
        `;

        container.appendChild(card);
    });

    // Adiciona o container logo após o texto "Em breve"
    secaoProjetos.appendChild(container);
}

// Executa quando a página carrega
window.addEventListener('load', carregarProjetos);
