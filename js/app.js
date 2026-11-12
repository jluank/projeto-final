let currentLang = "en";

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

function applyFilters() {

  const query = document.getElementById("search").value.toLowerCase();

  const age = document.getElementById("filter-age").value;
  const level = document.getElementById("filter-level").value;
  const skill = document.getElementById("filter-skill").value;
  const resource = document.getElementById("filter-resource").value;
  const mode = document.getElementById("filter-mode").value;

  const filtered = TOPICS.filter(topic => {

    const matchesSearch = 
      !query || 
      topic.title.toLowerCase().includes(query) ||
      topic.summary.toLowerCase().includes(query);

    const matchesAge = 
      !age || topic.age.includes(age);
  
    const matchesLevel = 
      !level || topic.level.includes(level);
      
    const matchesSkill = 
      !skill || topic.skill.includes(skill);
      
    const matchesResource = 
      !resource || topic.resource.includes(resource);
      
    const matchesMode = 
      !mode || topic.mode.includes(mode);   
      
    return (

      matchesSearch &&
      matchesAge &&
      matchesLevel &&
      matchesSkill &&
      matchesResource &&
      matchesMode
    )

    });

    renderCards(filtered);

    if(filtered.length === 0) {

      document.getElementById("topic-grid").innerHTML = `<p class="no-results">No topics match.</p>`;
    }
}

function setLang(lang) {

  currentLang = lang;

  document.querySelectorAll("[data-en]").forEach(el => {

    el.textContent = el.dataset[lang];
  });

  const search = document.getElementById("search");

  if (search) {

    search.placeholder = UI[lang].search;
  }

  document.querySelectorAll(".filters select").forEach(select => {

    if (select.options.length > 0) {

      select.options[0].textContent = UI[lang].all;
    }
  });

  document.documentElement.lang = lang;

  localStorage.setItem("lang", lang);

  const button = document.getElementById("lang-toggle");

  if(button) {

    button.textContent = lang === "en" ? "PT" : "EN";
  }

  const pageTitle = document.getElementById("page-title");

  if(pageTitle) {

    document.title = UI[lang].title;
  }
}

if(document.getElementById("topic-grid")) {

  fillSelects();

  renderCards(TOPICS);

  document.getElementById("search").addEventListener("input", applyFilters);

  const filterIds = [

    "filter-age",
    "filter-level",
    "filter-skill",
    "filter-resource",
    "filter-mode"
  ];

  filterIds.forEach(id => {

    document.getElementById(id).addEventListener("change", applyFilters);

  });
}

if (document.getElementById("topic-title")) {

  renderTopic();
}

