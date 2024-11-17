
# Simulador de Compatibilidade com Revistas Acadêmicas

## Descrição do Projeto

Este projeto tem como objetivo fornecer uma recomendação precisa de revistas acadêmicas baseadas em abstracts de artigos submetidos. Utilizando técnicas avançadas de Processamento de Linguagem Natural (NLP) e aprendizado supervisionado, o sistema sugere revistas que são mais compatíveis com o conteúdo do texto do abstract. Além disso, o sistema permite que os usuários ordenem as revistas recomendadas de acordo com o Qualis (qualidade acadêmica) ou o Fator de Impacto, de acordo com sua preferência.

## Arquivos do Projeto

Este repositório contém os seguintes arquivos principais:

1. index.html - Interface do Usuário:
    - O arquivo HTML fornece a estrutura da interface, onde o usuário pode interagir com o sistema.
    - Contém um formulário para submissão de abstracts, um campo para seleção da área de concentração do artigo e botões de interação para ordenar as revistas recomendadas.

2. styles.css - Estilos da Interface:
    - Define o estilo visual da aplicação, incluindo fontes, cores, layout responsivo e a estrutura geral da interface.
    - O objetivo é criar uma interface simples, intuitiva e fácil de usar.

3. script.js - Lógica de Interação:
    - Este arquivo lida com os eventos do usuário, como a submissão do abstract, o clique para gerar recomendações e a ordenação dos resultados.
    - Ele interage com o backend para gerar os resultados e exibi-los ao usuário de forma clara.

4. predict_model.py - Algoritmo de Aprendizado de Máquina:
    - Este arquivo Python contém o código responsável por processar e analisar os abstracts e sugerir as revistas acadêmicas mais compatíveis com base em um modelo de aprendizado supervisionado.

## Funcionalidades do Sistema

### 1. Seleção de Área de Concentração

O usuário começa selecionando a área de concentração à qual o artigo ou abstract pertence. As áreas de concentração são fundamentais para a recomendação, pois revistas acadêmicas muitas vezes possuem foco em áreas específicas do conhecimento. O sistema usa essa informação para filtrar revistas que são mais adequadas para a área selecionada.

### 2. Submissão do Abstract

Após selecionar a área de concentração, o usuário insere o abstract de seu artigo na interface. O abstract é processado pelo sistema, que irá identificar as palavras-chave, entender o contexto semântico e realizar a recomendação das revistas.

### 3. Recomendação de Revistas

Com o abstract submetido, o sistema analisa o conteúdo usando técnicas de aprendizado de máquina e sugere uma lista de revistas acadêmicas que são mais compatíveis com o conteúdo do abstract. A recomendação leva em consideração as palavras-chave e o contexto do texto.

### 4. Ordenação das Revistas por Qualis ou Fator de Impacto

Após a recomendação das revistas, o sistema oferece duas opções de ordenação:

- Qualis: Revistas são classificadas de acordo com a classificação Qualis, que é uma medida da qualidade acadêmica das revistas.
- Fator de Impacto: Revistas são classificadas com base em seu Fator de Impacto, que é uma métrica de importância da revista na área acadêmica.

## Tecnologias Utilizadas

### Frontend

- HTML: A estrutura da página web é criada com HTML, proporcionando uma interface interativa.
- CSS: Usado para estilizar a interface, tornando-a responsiva e amigável ao usuário.
- JavaScript: A interação do usuário com a interface é tratada em JavaScript. Esse arquivo controla a dinâmica de exibição das revistas recomendadas e a ordenação.

### Backend

- Python: O backend do sistema é desenvolvido em Python e utiliza bibliotecas como scikit-learn, TensorFlow, e NLTK para construir o modelo de aprendizado de máquina.
- scikit-learn: Usada para modelagem de aprendizado supervisionado e extração de características dos textos (usando TF-IDF).
- TensorFlow: Utilizado para construir e treinar o modelo de rede neural que realiza a classificação dos abstracts.
- NLTK: Usado para processamento de linguagem natural, como remoção de stopwords e tokenização.

## Como Funciona

### 1. Processamento do Abstract

O processo começa com a submissão do abstract do usuário. O texto é primeiramente limpo e pré-processado, removendo palavras irrelevantes (stopwords) e aplicando técnicas de tokenização.

### 2. Extração de Características

As características semânticas do abstract são extraídas utilizando a técnica de TF-IDF (Term Frequency-Inverse Document Frequency). Essa abordagem transforma o texto em um vetor numérico que pode ser utilizado por modelos de aprendizado de máquina.

### 3. Treinamento do Modelo

O modelo de aprendizado de máquina é treinado com uma coleção de abstracts rotulados, cada um associado a uma revista. Utilizando um algoritmo de rede neural, o modelo aprende a associar o conteúdo do abstract às revistas mais relevantes.

### 4. Classificação e Recomendação

Uma vez treinado, o modelo pode prever a revista mais compatível com novos abstracts inseridos pelo usuário. O sistema então apresenta as revistas recomendadas, ordenadas de acordo com o critério escolhido (Qualis ou Fator de Impacto).

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de que você tem os seguintes pré-requisitos instalados:

- Python 3.6+
- Bibliotecas Python:
    - tensorflow
    - scikit-learn
    - nltk
    - numpy

Instale as bibliotecas necessárias com:

```
pip install -r requirements.txt
```

### Executando o Sistema

1. Para rodar o backend do modelo de aprendizado de máquina, execute o seguinte comando:

```
python predict_model.py
```

2. Para interagir com a interface, abra o arquivo index.html em seu navegador.

### Treinamento do Modelo

O modelo pode ser re-treinado com novos dados, caso necessário. Para isso, basta adicionar mais abstracts e revistas no arquivo predict_model.py, e rodar o treinamento novamente.

