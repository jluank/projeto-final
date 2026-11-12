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
          <div>${tags}</div>

        </a>
    
    `;
  }).join("");
}

function fillSelects() {

  const filters = [

    { id: "filter-age", values: AGES },
    { id: "filter-level", values: LEVELS },
    { id: "filter-skill", values: SKILLS },
    { id: "filter-resource", values: RESOURCES },
    { id: "filter-mode", values: MODES }
  ];

  filters.forEach(filter => {

    const select = document.getElementById(filter.id);

    select.innerHTML = '<option value="">All</option>';

    filter.values.forEach(value => {

      const option = document.createElement("option");

      option.value = value;
      option.textContent = value;

      select.appendChild(option);

    });
  })
}


if(document.getElementById("topic-grid")) {

  fillSelects();

  renderCards(TOPICS);
}