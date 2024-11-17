// Dados mockados das revistas
const journals = [
    {
        nome: "Journal of AI Research",
        areas: {
            "Ciência da Computação": "A1",
            "Engenharia Elétrica": "A2"
        },
        jcr: 4.5,
        link: "https://journal-ai.com"
    },
    {
        nome: "Data Science Today",
        areas: {
            "Ciência de Dados": "A2",
            "Estatística": "B1"
        },
        jcr: 3.8,
        link: "https://datasciencetoday.com"
    },
    {
        nome: "Journal of Machine Learning",
        areas: {
            "Ciência da Computação": "A1",
            "Ciência de Dados": "A1"
        },
        jcr: 5.1,
        link: "https://mljournal.com"
    },
    {
        nome: "Neural Networks Review",
        areas: {
            "Engenharia Elétrica": "B1",
            "Ciência de Dados": "B2"
        },
        jcr: 2.5,
        link: "https://nnreview.com"
    }
];

// Função para simular a análise de compatibilidade
function analyzeAbstract(abstract, area) {
    if (!abstract.trim()) {
        alert("Por favor, insira o texto do abstract.");
        return [];
    }

    if (!area) {
        alert("Por favor, selecione uma área de concentração.");
        return [];
    }

    // Filtrar revistas compatíveis com a área selecionada
    const filteredJournals = journals
        .filter(journal => journal.areas[area])
        .map(journal => ({
            nome: journal.nome,
            qualis: journal.areas[area],
            jcr: journal.jcr,
            link: journal.link
        }));

    return filteredJournals.sort((a, b) => b.jcr - a.jcr); // Ordenar inicialmente por JCR
}

// Função para exibir os resultados na tabela
function displayResults(results) {
    const resultsTable = document.getElementById("results-table");
    resultsTable.innerHTML = "";

    results.forEach(journal => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${journal.nome}</td>
            <td>${journal.qualis}</td>
            <td>${journal.jcr}</td>
            <td><a href="${journal.link}" target="_blank">Submeter</a></td>
        `;
        resultsTable.appendChild(row);
    });

    document.getElementById("results-section").style.display = "block";
}

// Função para priorizar a ordenação por Qualis
function sortByQualis() {
    const qualisOrder = { "A1": 1, "A2": 2, "B1": 3, "B2": 4 }; // Ordem de prioridade
    const area = document.getElementById("area-select").value;
    const results = Array.from(journals)
        .filter(journal => journal.areas[area])
        .map(journal => ({
            nome: journal.nome,
            qualis: journal.areas[area],
            jcr: journal.jcr,
            link: journal.link
        }))
        .sort((a, b) => qualisOrder[a.qualis] - qualisOrder[b.qualis]);
    displayResults(results);
}

// Função para priorizar a ordenação por Fator de Impacto
function sortByImpact() {
    const area = document.getElementById("area-select").value;
    const results = Array.from(journals)
        .filter(journal => journal.areas[area])
        .map(journal => ({
            nome: journal.nome,
            qualis: journal.areas[area],
            jcr: journal.jcr,
            link: journal.link
        }))
        .sort((a, b) => b.jcr - a.jcr);
    displayResults(results);
}

// Evento de clique no botão de submissão
document.getElementById("submit-button").addEventListener("click", () => {
    const abstract = document.getElementById("abstract-input").value;
    const area = document.getElementById("area-select").value;
    const results = analyzeAbstract(abstract, area);
    displayResults(results);
});

// Evento de clique para priorizar Qualis
document.getElementById("sort-qualis-button").addEventListener("click", sortByQualis);

// Evento de clique para priorizar Fator de Impacto
document.getElementById("sort-impact-button").addEventListener("click", sortByImpact);