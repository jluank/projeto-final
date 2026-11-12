# English Teaching Manager

Gerenciador de tópicos de ensino de inglês. Aplicação web estática para organizar e filtrar materiais de aula.

## Funcionalidades

- Listagem de tópicos com busca por título/resumo
- Filtros por: faixa etária, nível, habilidade, tipo de recurso e modalidade de ensino
- Interface bilíngue (EN / PT) com troca de idioma e persistência no `localStorage`
- Páginas de tópico com blocos de dica, atividade, mídia e nota
- Um tópico estático de exemplo (`verb-to-be`) e visualização dinâmica dos demais via `topic.html?id=...`

## Como usar

1. Abra o arquivo `index.html` no navegador (não precisa de servidor).
2. Use a busca e os filtros para encontrar tópicos.
3. Clique em um card para abrir a página do tópico.
4. Clique no botão **PT/EN** para alternar o idioma da interface.

## Estrutura

projeto-final-main/
├── index.html              # Página principal (lista + filtros)
├── topic.html              # Visualização dinâmica de tópico
├── topics/
│   └── verb-to-be.html     # Exemplo de página estática de tópico
├── css/
│   └── style.css           # Estilos
└── js/
├── data.js             # Dados dos tópicos, filtros e textos da UI
└── app.js              # Lógica de renderização, filtros e idioma

## Dados

Os tópicos e opções de filtro ficam em `js/data.js` (`TOPICS`, `AGES`, `LEVELS`, etc.).  
Para adicionar um novo tópico, inclua um objeto no array `TOPICS` com os campos: `id`, `title`, `summary`, `age`, `level`, `skill`, `resource`, `mode` e `blocks` (opcional).

## Tecnologias

HTML, CSS e JavaScript puro. Sem dependências externas e sem backend.
