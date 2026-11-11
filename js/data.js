const AGES = [

  "children",
  "teens",
  "adults",
  "elderly"
]

const LEVELS = [

  "beginner",
  "elementary",
  "intermediate",
  "advanced"
]

const SKILLS = [

  "speaking",
  "listening",
  "reading",
  "writing"
]

const RESOURCES = [

  "visual",
  "audio",
  "game",
  "text"
]

const MODES = [

  "group",
  "one-on-one"
]


const UI = {

  en: {
    title: "English Teaching Manager",
    search: "Search topics...",
    age: "Age group",
    level: "Level",
    skill: "Skill",
    resource: "Resource",
    mode: "Teaching mode",
    noResults: "No topics match.",
    all: "All"
  },

  pt: {
    title: "Gerenciador de Ensino de Inglês",
    search: "Pesquisar assuntos...",
    age: "Faixa etária",
    level: "Nível",
    skill: "Habilidade",
    resource: "Recurso",
    mode: "Modalidade",
    noResults: "Nenhum assunto encontrado.",
    all: "Todos"
  }
};


const TOPICS = [

  {
    id: "verb-to-be",
    title: "Verb To Be",
    summary: "Learn how to use the verb to be in affirmative, negative and interrogative sentences.",

    href: "topics/verb-to-be.html",

    age: ["children", "teens"],
    level: ["beginner"],
    skill: ["speaking", "writing"],
    resource: ["visual", "audio", "text"],
    mode: ["group", "one-on-one"],

    blocks: []
  },

  {
    id: "present-simple",
    title: "Present Simple",
    summary: "Learn how to describe routines, habits and general facts using the present simple tense.",

    age: ["children", "teens", "adults"],
    level: ["beginner", "elementary"],
    skill: ["speaking", "listening", "writing"],
    resource: ["visual", "audio", "game"],
    mode: ["group", "one-on-one"],

    blocks: [

      {
        type: "tip",
        title: "Third Person Singular",
        body: "Remember to add -s or -es to the verb when using he, she or it."
      },

      {
        type: "activity",
        title: "Daily Routine",
        body: "Ask students to describe their daily routines using the present simple."
      },

      {
        type: "media",
        title: "Listening Practice",
        body: "Listen to a short conversation about someone's daily routine.",
        media: "audio"
      },

      {
        type: "note",
        title: "Common Mistake",
        body: "Remember that questions with does use the base form of the main verb."
      }
    ]
  }
];
