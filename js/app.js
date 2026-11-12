function renderCards(list) {
  const grid = document.getElementById("topic-grid");

  grid.innerHTML = list.map(topic => {

    const href = topic.href || `topic.html?id=${topic.id}`;

    const tags = topic.level.map(level => {

      return `<span class="tag">${level}</span>`;
    }).join("");

    return `
    
        <a class="card" href="${href}">

        <h2>${topic.title}</h2>

        <p>${topic.summary}</p>

        <div>
          ${tags}
        </div>

        </a>
    
    `;
  }).join("");
}