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

function renderTopic() {

  const id = new URLSearchParams(location.search).get("id");
  const topic = TOPICS.find(t => t.id === id);

  const  content = document.getElementById("topic-content");
  const  notFound = document.getElementById("not-found");

  const  title = document.getElementById("topic-title");
  const  summary = document.getElementById("topic-summary");
  const  tags = document.getElementById("topic-tags");
  const  blocks = document.getElementById("blocks");

  if(!topic) {

    content.hidden = true;
    notFound.hidden = false;

    return;
  }

  title.textContent = topic.title;
  summary.textContent = topic.summary;

  const topicTags = [...topic.level, ...topic.skill];

  tags.innerHTML = topicTags.map(tag => {

    return `<span class="tag">${tag}</span>`;
  }).join("");

  blocks.innerHTML = topic.blocks.map(renderBlock).join("");
}

function renderBlock(block) {

  switch(block.type) {

    case "tip":

      return `
      
        <div class="block">

          <h3>Tip - ${block.title}</h3>

          <p>${block.body}</p>

        </div>
      
      `;

    case "activity":

      return `

        <div class="block">

          <h3>Activity - ${block.title}</h3>

          <p>${block.body}</p>

        </div>        

      `;

    case "media":

      return `

        <div class="block">

          <h3>Media - ${block.title}</h3>

          <p>${block.body}</p>

          <div class="media-box">
            [${block.media} placeholder]
          </div>

        </div>        

      `;

    case "note":

      return `

        <div class="block">

          <h3>Note - ${block.title}</h3>

          <p>${block.body}</p>

        </div>        

      `;
    
    default:

      return "";
  }
}


if(document.getElementById("topic-grid")) {

  fillSelects();

  renderCards(TOPICS);
}

if (document.getElementById("topic-title")) {

  renderTopic();
}

  