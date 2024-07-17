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
    "title": "Guida Completa e Definitiva sui Web Core Vitals Aggiornata al 2024",
    "content": "## Introduzione ai Web Core Vitals\n\nI Web Core Vitals sono un set di metriche introdotte da Google per valutare la qualità dell'esperienza utente su una pagina web. Queste metriche misurano aspetti cruciali come la velocità di caricamento, l'interattività e la stabilità visiva delle pagine. A partire dal 2024, i Web Core Vitals continuano a giocare un ruolo centrale nel ranking dei siti sui motori di ricerca, rendendo indispensabile per i webmaster e gli sviluppatori ottimizzare i loro siti secondo questi parametri.\n\n## Le Tre Metriche Principali dei Web Core Vitals\n\n### 1. Largest Contentful Paint (LCP)\nMisura il tempo impiegato per caricare il contenuto principale della pagina. Un buon LCP dovrebbe essere inferiore a 2.5 secondi.\n\n### 2. First Input Delay (FID)\nMisura il tempo che intercorre tra la prima interazione dell'utente con la pagina e il momento in cui il browser risponde a tale interazione. Un buon FID dovrebbe essere inferiore a 100 millisecondi.\n\n### 3. Cumulative Layout Shift (CLS)\nMisura la stabilità visiva della pagina. Un buon CLS dovrebbe essere inferiore a 0.1.\n\n## Perché i Web Core Vitals sono Importanti?\n\nGoogle utilizza i Web Core Vitals come parte del suo algoritmo di ranking. Siti che offrono una migliore esperienza utente, misurata attraverso queste metriche, sono premiati con posizioni più alte nei risultati di ricerca. Questo impatta direttamente la visibilità e il traffico del sito, influenzando così anche le conversioni e i ricavi.\n\n## Come Monitorare i Web Core Vitals\n\n### Strumenti di Google\n- **Google Search Console:** Fornisce un rapporto sui Web Core Vitals del tuo sito, indicando le pagine che necessitano di miglioramenti.\n- **PageSpeed Insights:** Analizza le performance della pagina sia su dispositivi mobili che desktop e fornisce suggerimenti specifici per migliorare le metriche.\n- **Lighthouse:** Strumento integrato in Chrome DevTools che offre un'analisi approfondita delle performance della pagina.\n\n### Altri Strumenti Utili\n- **GTmetrix:** Offre dettagliate analisi delle performance del sito con suggerimenti pratici.\n- **WebPageTest:** Consente di testare la velocità di caricamento delle pagine da diverse località globali.\n\n## Come Migliorare i Web Core Vitals\n\n### Migliorare il Largest Contentful Paint (LCP)\n- **Ottimizzare le Immagini:** Utilizza formati moderni come WebP, riduci le dimensioni delle immagini e implementa il lazy loading.\n- **Migliorare il Caricamento del Server:** Usa una rete di distribuzione dei contenuti (CDN), ottimizza la cache e migliora le performance del server.\n- **Minimizzare il CSS e il JavaScript:** Riduci la dimensione dei file CSS e JavaScript e carica solo ciò che è necessario.\n\n### Ridurre il First Input Delay (FID)\n- **Ottimizzare il JavaScript:** Suddividi i compiti lunghi in segmenti più piccoli, rimuovi JavaScript non necessario e utilizza tecniche di async e defer.\n- **Ridurre l'Impatto dei Plugin di Terze Parti:** Limita l'uso di plugin che possono rallentare l'interattività della pagina.\n\n### Minimizzare il Cumulative Layout Shift (CLS)\n- **Dimensioni Statiche per Elementi Dinamici:** Definisci dimensioni fisse per immagini, video e altri elementi dinamici per prevenire spostamenti durante il caricamento.\n- **Caricamento dei Font:** Usa la strategia di caricamento dei font ottimale per evitare che il testo cambi aspetto durante il caricamento.\n- **Animazioni e Transizioni:** Implementa animazioni con attenzione per evitare spostamenti inaspettati degli elementi della pagina.\n\n## Conclusioni\n\nL'ottimizzazione dei Web Core Vitals è essenziale per migliorare la performance del sito, l'esperienza utente e il posizionamento nei motori di ricerca. Monitorare costantemente queste metriche e applicare le migliori pratiche per migliorarle è un investimento che può portare significativi benefici in termini di traffico e conversioni. Utilizza gli strumenti disponibili e segui i consigli forniti per assicurarti che il tuo sito sia sempre allineato agli standard più recenti e competitivi del web.\n\n## Risorse Addizionali\n- [Guida ufficiale di Google sui Web Core Vitals](https://developers.google.com/search/docs/advanced/experience/web-vitals)\n- [Documentazione su PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)\n- [Strumento di analisi Lighthouse](https://developers.google.com/web/tools/lighthouse)\n\n---\n\nQuesta guida dovrebbe aiutarti a comprendere e migliorare i Web Core Vitals del tuo sito, assicurando una migliore esperienza utente e un miglior posizionamento nei risultati di ricerca.",
    "category": "Core Vitals",
    "author": "6696382b90912396197dac37",
    "coverImage": "/blogPostBanners/BLOGbanner.png"
  },
  {
    title: "Titolo dell'articolo 2",
    "title": "Guida Completa e Definitiva sui Web Core Vitals Aggiornata al 2024",
    "content": "## Introduzione ai Web Core Vitals\n\nI Web Core Vitals sono un set di metriche introdotte da Google per valutare la qualità dell'esperienza utente su una pagina web. Queste metriche misurano aspetti cruciali come la velocità di caricamento, l'interattività e la stabilità visiva delle pagine. A partire dal 2024, i Web Core Vitals continuano a giocare un ruolo centrale nel ranking dei siti sui motori di ricerca, rendendo indispensabile per i webmaster e gli sviluppatori ottimizzare i loro siti secondo questi parametri.\n\n## Le Tre Metriche Principali dei Web Core Vitals\n\n### 1. Largest Contentful Paint (LCP)\nMisura il tempo impiegato per caricare il contenuto principale della pagina. Un buon LCP dovrebbe essere inferiore a 2.5 secondi.\n\n### 2. First Input Delay (FID)\nMisura il tempo che intercorre tra la prima interazione dell'utente con la pagina e il momento in cui il browser risponde a tale interazione. Un buon FID dovrebbe essere inferiore a 100 millisecondi.\n\n### 3. Cumulative Layout Shift (CLS)\nMisura la stabilità visiva della pagina. Un buon CLS dovrebbe essere inferiore a 0.1.\n\n## Perché i Web Core Vitals sono Importanti?\n\nGoogle utilizza i Web Core Vitals come parte del suo algoritmo di ranking. Siti che offrono una migliore esperienza utente, misurata attraverso queste metriche, sono premiati con posizioni più alte nei risultati di ricerca. Questo impatta direttamente la visibilità e il traffico del sito, influenzando così anche le conversioni e i ricavi.\n\n## Come Monitorare i Web Core Vitals\n\n### Strumenti di Google\n- **Google Search Console:** Fornisce un rapporto sui Web Core Vitals del tuo sito, indicando le pagine che necessitano di miglioramenti.\n- **PageSpeed Insights:** Analizza le performance della pagina sia su dispositivi mobili che desktop e fornisce suggerimenti specifici per migliorare le metriche.\n- **Lighthouse:** Strumento integrato in Chrome DevTools che offre un'analisi approfondita delle performance della pagina.\n\n### Altri Strumenti Utili\n- **GTmetrix:** Offre dettagliate analisi delle performance del sito con suggerimenti pratici.\n- **WebPageTest:** Consente di testare la velocità di caricamento delle pagine da diverse località globali.\n\n## Come Migliorare i Web Core Vitals\n\n### Migliorare il Largest Contentful Paint (LCP)\n- **Ottimizzare le Immagini:** Utilizza formati moderni come WebP, riduci le dimensioni delle immagini e implementa il lazy loading.\n- **Migliorare il Caricamento del Server:** Usa una rete di distribuzione dei contenuti (CDN), ottimizza la cache e migliora le performance del server.\n- **Minimizzare il CSS e il JavaScript:** Riduci la dimensione dei file CSS e JavaScript e carica solo ciò che è necessario.\n\n### Ridurre il First Input Delay (FID)\n- **Ottimizzare il JavaScript:** Suddividi i compiti lunghi in segmenti più piccoli, rimuovi JavaScript non necessario e utilizza tecniche di async e defer.\n- **Ridurre l'Impatto dei Plugin di Terze Parti:** Limita l'uso di plugin che possono rallentare l'interattività della pagina.\n\n### Minimizzare il Cumulative Layout Shift (CLS)\n- **Dimensioni Statiche per Elementi Dinamici:** Definisci dimensioni fisse per immagini, video e altri elementi dinamici per prevenire spostamenti durante il caricamento.\n- **Caricamento dei Font:** Usa la strategia di caricamento dei font ottimale per evitare che il testo cambi aspetto durante il caricamento.\n- **Animazioni e Transizioni:** Implementa animazioni con attenzione per evitare spostamenti inaspettati degli elementi della pagina.\n\n## Conclusioni\n\nL'ottimizzazione dei Web Core Vitals è essenziale per migliorare la performance del sito, l'esperienza utente e il posizionamento nei motori di ricerca. Monitorare costantemente queste metriche e applicare le migliori pratiche per migliorarle è un investimento che può portare significativi benefici in termini di traffico e conversioni. Utilizza gli strumenti disponibili e segui i consigli forniti per assicurarti che il tuo sito sia sempre allineato agli standard più recenti e competitivi del web.\n\n## Risorse Addizionali\n- [Guida ufficiale di Google sui Web Core Vitals](https://developers.google.com/search/docs/advanced/experience/web-vitals)\n- [Documentazione su PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)\n- [Strumento di analisi Lighthouse](https://developers.google.com/web/tools/lighthouse)\n\n---\n\nQuesta guida dovrebbe aiutarti a comprendere e migliorare i Web Core Vitals del tuo sito, assicurando una migliore esperienza utente e un miglior posizionamento nei risultati di ricerca.",
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



    
