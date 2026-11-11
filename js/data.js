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
  },

  {
    id: "past-tense",
    title: "Past Tense",
    summary: "Learn how to talk about completed actions and events in the past.",

    age: ["teens", "adults"],
    level: ["elementary", "intermediate"],
    skill: ["speaking", "reading", "writing"],
    resource: ["text", "game", "visual"],
    mode: ["group", "one-on-one"],

    blocks: [

      {
        type: "tip",
        title: "Regular Verbs",
        body: "Most regular verbs form the past tense by adding -ed."
      },

      {
        type: "activity",
        title: "Yesterday's Activities",
        body: "Ask students to write five sentences about what they did yesterday."
      },

      {
        type: "media",
        title: "Past Events",
        body: "Watch a short video about historical events and identify past tense verbs.",
        media: "video"
      },

      {
        type: "note",
        title: "Irregular Verbs",
        body: "Irregular verbs do not follow the regular -ed pattern. Students should learn their different forms."
      }
    ]
  },

  {
    id: "comparatives",
    title: "Comparatives",
    summary: "Learn how to compare people, objects and places using comparative adjectives.",

    age: ["children", "teens", "adults"],
    level: ["elementary"],
    skill: ["speaking", "reading"],
    resource: ["visual", "game", "text"],
    mode: ["group", "one-on-one"],

    blocks: [

      {
        type: "tip",
        title: "Short Adjectives",
        body: "Many short adjectives form comparatives by adding -er, such as tall and taller."
      },

      {
        type: "activity",
        title: "Compare Objects",
        body: "Show students pictures of two objects and ask them to compare their characteristics."
      },

      {
        type: "media",
        title: "Visual Comparison",
        body: "Use images of different animals to practice comparative adjectives.",
        media: "image"
      },

      {
        type: "note",
        title: "Long Adjectives",
        body: "Longer adjectives generally use more before the adjective, such as more interesting."
      }
    ]
  },

  {
    id: "prepositions-of-place",
    title: "Prepositions of Place",
    summary: "Learn how to describe the position of objects and people using prepositions of place.",

    age: ["children", "teens"],
    level: ["beginner", "elementary"],
    skill: ["speaking", "listening"],
    resource: ["visual", "game", "text"],
    mode: ["group", "one-on-one"],

    blocks: [

      {
        type: "tip",
        title: "Common Prepositions",
        body: "Learn the basic meanings and uses of in, on, under, behind, next to and between."
      },

      {
        type: "activity",
        title: "Where Is the Object?",
        body: "Place objects around the classroom and ask students to describe their positions."
      },

      {
        type: "media",
        title: "Position Practice",
        body: "Use an image of a room to identify the positions of different objects.",
        media: "image"
      },

      {
        type: "note",
        title: "Sentence Structure",
        body: "Use the verb to be followed by a preposition of place to describe an object's position."
      }
    ]
  }
];
