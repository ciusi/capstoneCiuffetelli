const axios = require('axios');
const jwt = require('jsonwebtoken');

const payload = {
  user: {
    id: '6696382b90912396197dac37' // ID fittizio 
  }
};

const secret = 'esaurimentoMentaleInCorso2024ALIVORNOboiadeh!'; 
const token = jwt.sign(payload, secret, { expiresIn: 3600 });

const coverImagePath = "/blogPostBanners/BLOGbanner.png"; // Percorso relativo dell'immagine di copertina

const articles = [
  // Core Vitals
  {
    title: "Titolo dell'articolo 1",
    content: "Contenuto dell'articolo 1",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 2",
    content: "Contenuto dell'articolo 2",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 3",
    content: "Contenuto dell'articolo 3",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 4",
    content: "Contenuto dell'articolo 4",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 5",
    content: "Contenuto dell'articolo 5",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  // SEO In-Site
  {
    title: "Titolo dell'articolo 6",
    content: "Contenuto dell'articolo 6",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 7",
    content: "Contenuto dell'articolo 7",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 8",
    content: "Contenuto dell'articolo 8",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 9",
    content: "Contenuto dell'articolo 9",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 10",
    content: "Contenuto dell'articolo 10",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  // SEO Off-Site
  {
    title: "Titolo dell'articolo 11",
    content: "Contenuto dell'articolo 11",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 12",
    content: "Contenuto dell'articolo 12",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 13",
    content: "Contenuto dell'articolo 13",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 14",
    content: "Contenuto dell'articolo 14",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  },
  {
    title: "Titolo dell'articolo 15",
    content: "Contenuto dell'articolo 15",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath // Usa il percorso dell'immagine di copertina
  }
];

const createPost = async (article) => {
  try {
    const response = await axios.post('http://localhost:5000/api/blog', article, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(`Articolo creato: ${response.data.title}`);
  } catch (error) {
    console.error(`Errore nella creazione dell'articolo: ${error.response ? error.response.data : error.message}`);
  }
};

const populateBlog = async () => {
  for (const article of articles) {
    await createPost(article);
  }
};

populateBlog();
