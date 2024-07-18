const axios = require('axios');
const jwt = require('jsonwebtoken');

const payload = {
  user: {
    id: '6696382b90912396197dac37' // ID fittizio 
  }
};

const secret = 'esaurimentoMentaleInCorso2024ALIVORNOboiadeh!'; 
const token = jwt.sign(payload, secret, { expiresIn: 3600 });

const coverImagePath = "/blogPostBanners/BLOGbanner.png"; 
const coverImagePathIn ="/blogPostBanners/blogbannerseoin.png";
const coverImagePathOff ="/blogPostBanners/blogbannerseooff.png";

const articles = [
  // Core Vitals
  {
    title: "Guida Completa e Definitiva sui Web Core Vitals Aggiornata al 2024",
    content: "Introduzione ai Web Core Vitals\n\nI Web Core Vitals sono un set di metriche introdotte da Google per valutare la qualità dell'esperienza utente su una pagina web. Queste metriche misurano aspetti cruciali come la velocità di caricamento, l'interattività e la stabilità visiva delle pagine. A partire dal 2024, i Web Core Vitals continuano a giocare un ruolo centrale nel ranking dei siti sui motori di ricerca, rendendo indispensabile per i webmaster e gli sviluppatori ottimizzare i loro siti secondo questi parametri.\n\n...",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: "/blogPostBanners/BLOGbanner.png"
  },
  {
    title: "Come ottimizzare LCP, FID e CLS",
    content: "Introduzione ai Web Core Vitals\n\nI Web Core Vitals sono un set di metriche introdotte da Google per valutare la qualità dell'esperienza utente su una pagina web. Queste metriche misurano aspetti cruciali come la velocità di caricamento, l'interattività e la stabilità visiva delle pagine. A partire dal 2024, i Web Core Vitals continuano a giocare un ruolo centrale nel ranking dei siti sui motori di ricerca, rendendo indispensabile per i webmaster e gli sviluppatori ottimizzare i loro siti secondo questi parametri.\n\n...",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath 
  },
  {
    title: "Total Blocking Time",
    content: "Il Total Blocking Time (TBT) è una delle metriche chiave dei Web Core Vitals. Esso misura la quantità di tempo durante il quale la pagina è bloccata e non risponde agli input dell'utente. Ottimizzare il TBT è fondamentale per garantire un'esperienza utente fluida e reattiva.\n\n...",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath 
  },
  {
    title: "First Contentful Paint",
    content: "Il First Contentful Paint (FCP) misura il tempo che intercorre dal momento in cui la pagina inizia a caricarsi fino a quando il primo contenuto significativo diventa visibile. Migliorare l'FCP è cruciale per una buona esperienza utente e per il posizionamento nei motori di ricerca.\n\n...",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath 
  },
  {
    title: "Time to Interactive",
    content: "Il Time to Interactive (TTI) misura il tempo che una pagina impiega a diventare completamente interattiva. Un TTI rapido è essenziale per mantenere gli utenti coinvolti e soddisfatti. Scopri come ottimizzare questa metrica chiave per migliorare la performance del tuo sito.\n\n...",
    category: "Core Vitals",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePath 
  },
  {
    title: "Guida definitiva all'ottimizzazione dei META TAG",
    content: "I META TAG sono elementi HTML fondamentali per l'ottimizzazione SEO. Questa guida completa ti mostrerà come ottimizzare i META TAG per migliorare la visibilità del tuo sito sui motori di ricerca.\n\n...",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathIn 
  },
  {
    title: "Immagini e descrizioni: come migliorarle in ottica SEO",
    content: "Le immagini e le descrizioni giocano un ruolo cruciale nell'ottimizzazione SEO. Scopri come ottimizzare questi elementi per migliorare la visibilità del tuo sito e attirare più traffico organico.\n\n...",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathIn 
  },
  {
    title: "Pulire il codice: risorse per un rendering migliore",
    content: "Un codice pulito e ben strutturato è essenziale per il rendering efficiente delle pagine web. Scopri le migliori pratiche e risorse per mantenere il tuo codice ordinato e ottimizzato per la performance.\n\n...",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathIn 
  },
  {
    title: "Description delle pagine: cosa vede Google di te?",
    content: "Le description delle pagine sono fondamentali per l'ottimizzazione SEO. Scopri come scrivere descrizioni efficaci che attirino l'attenzione di Google e degli utenti.\n\n...",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathIn 
  },
  {
    title: "Server, hosting, velocità: facciamo chiarezza",
    content: "La scelta del server e del servizio di hosting può influenzare significativamente la velocità del tuo sito web. Scopri come fare le scelte giuste per migliorare le performance del tuo sito.\n\n...",
    category: "SEO In-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathIn 
  },
  {
    title: "La guida deifinitiva alla link building",
    content: "La link building è una delle strategie SEO più efficaci per migliorare il posizionamento nei motori di ricerca. Scopri come costruire una strategia di link building solida e efficace.\n\n...",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathOff 
  },
  {
    title: "Link building interna ed esterna",
    content: "La link building interna ed esterna sono entrambe cruciali per una strategia SEO efficace. Scopri le differenze e come ottimizzare entrambe per migliorare la visibilità del tuo sito.\n\n...",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathOff 
  },
  {
    title: "Link earning",
    content: "Il link earning è una strategia SEO che si basa sulla creazione di contenuti di alta qualità che attraggono link naturali. Scopri come implementare questa strategia per migliorare il tuo profilo di link.\n\n...",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathOff 
  },
  {
    title: "Seo-OFF con blogger e influencer",
    content: "Collaborare con blogger e influencer può potenziare la tua strategia SEO off-site. Scopri come trovare e collaborare con i giusti partner per massimizzare i tuoi risultati.\n\n...",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathOff 
  },
  {
    title: "Il potere delle persone: recensioni e social media",
    content: "Le recensioni e i social media giocano un ruolo cruciale nella SEO off-site. Scopri come gestire le recensioni e utilizzare i social media per migliorare la visibilità del tuo sito.\n\n...",
    category: "SEO Off-Site",
    author: "6696382b90912396197dac37",
    coverImage: coverImagePathOff 
  }
];

const createPost = async (article) => {
  try {
    const response = await axios.post(`${process.env.BACKEND_URL}/api/blog`, article, {
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



    
