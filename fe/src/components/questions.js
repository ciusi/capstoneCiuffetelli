// questions.js
export const questions = [
    {
      question:
        "1. Quanti backlink unici ha il tuo sito web secondo strumenti come Ahrefs, Moz o SEMrush?",
      explanation:
        "I backlink sono link provenienti da altri siti web che puntano al tuo sito. Un numero maggiore di backlink di qualità può migliorare il posizionamento del tuo sito nei motori di ricerca. La quantità di backlink indica quanto il tuo sito è citato da altre fonti.",
      options: ["0-50/non lo so", "51-200", "201-500", "501+"],
      points: [1, 2, 3, 4],
      feedback: [
        "Pochi backlink. Dovresti concentrarti su una strategia di link building.",
        "Discreta quantità di backlink. Continua a migliorare.",
        "Buona quantità di backlink. Stai andando bene.",
        "Eccellente quantità di backlink! Ottimo lavoro!"
      ],
    },
    {
      question:
        "2. Qual è l'autorità media dei domini che linkano al tuo sito (Domain Authority/Domain Rating)?",
      explanation:
        "La qualità dei backlink è determinata dall'autorità e dalla rilevanza dei siti web che puntano al tuo. Backlink da siti autorevoli e pertinenti sono più preziosi e influiscono positivamente sul ranking del tuo sito.",
      options: ["0-20/ non lo so", "21-40", "41-60", "61+"],
      points: [1, 2, 3, 4],
      feedback: [
        "L'autorità dei tuoi backlink è bassa. Cerca di ottenere link da siti più autorevoli.",
        "Autorità discreta. Continua a migliorare la qualità dei tuoi backlink.",
        "Buona autorità. I tuoi backlink sono di buona qualità.",
        "Eccellente autorità! Ottimo lavoro!"
      ],
    },
    {
      question: "3. I backlink provengono da quanti domini unici?",
      explanation:
        "La varietà delle fonti di backlink si riferisce alla diversità dei domini che puntano al tuo sito. Avere backlink da molti domini diversi è preferibile per una strategia di link building efficace.",
      options: ["1-10/ non lo so", "11-50", "51-100", "101+"],
      points: [1, 2, 3, 4],
      feedback: [
        "Pochi domini unici. Dovresti diversificare le tue fonti di backlink.",
        "Buona varietà di domini. Continua a migliorare.",
        "Ottima varietà di domini. Stai andando bene.",
        "Eccellente varietà di domini! Ottimo lavoro!"
      ],
    },
    {
      question: "4. Qual è la percentuale di backlink follow?",
      explanation:
        "I backlink possono essere 'follow' (trasmettono valore SEO) o 'nofollow' (non trasmettono valore SEO diretto). Una buona proporzione di backlink follow è importante per la SEO.",
      options: ["Meno del 20%/ non lo so", "21-40%", "41-60%", "Più del 60%"],
      points: [1, 2, 3, 4],
      feedback: [
        "Bassa percentuale di backlink follow. Cerca di ottenere più backlink follow.",
        "Percentuale discreta di backlink follow. Continua a migliorare.",
        "Buona percentuale di backlink follow. Stai andando bene.",
        "Eccellente percentuale di backlink follow! Ottimo lavoro!"
      ],
    },
    {
      question:
        "5. Quanti backlink da siti governativi o educativi ha il tuo sito?",
      explanation:
        "I backlink da siti governativi (.gov) o educativi (.edu) sono molto preziosi per la loro alta autorità.",
      options: ["Nessuno/ non lo so", "1-5", "6-10", "Più di 10"],
      points: [1, 2, 3, 4],
      feedback: [
        "Nessun backlink da siti governativi o educativi. Cerca di ottenerne alcuni.",
        "Buon inizio con i backlink governativi o educativi. Continua a migliorare.",
        "Ottimo lavoro con i backlink governativi o educativi. Stai andando bene.",
        "Eccellente numero di backlink governativi o educativi! Ottimo lavoro!"
      ],
    },
    {
      question:
        "6. Il sito web è attivamente presente su quali piattaforme social media?",
      explanation:
        "La presenza sui social media è importante per la visibilità del tuo sito web. Una presenza attiva su piattaforme social può portare traffico e aumentare la consapevolezza del marchio. I social media possono anche indirettamente influenzare la SEO.",
      options: [
        "Nessuna/ non lo so",
        "1-2 piattaforme",
        "3-4 piattaforme",
        "5+ piattaforme",
      ],
      points: [1, 2, 3, 4],
      feedback: [
        "Nessuna presenza sui social media. Inizia a costruire una presenza attiva.",
        "Buon inizio sui social media. Continua a migliorare.",
        "Ottima presenza sui social media. Stai andando bene.",
        "Eccellente presenza sui social media! Ottimo lavoro!"
      ],
    },
    {
      question:
        "7. Qual è il livello medio di engagement (like, commenti, condivisioni) sui tuoi post social?",
      explanation:
        "L'engagement sui social media si riferisce a quanto i tuoi contenuti vengono apprezzati, commentati e condivisi dagli utenti. Un alto livello di engagement è un segnale positivo e può migliorare la visibilità del tuo sito.",
      options: ["Basso/ non lo so", "Moderato", "Buono", "Alto"],
      points: [1, 2, 3, 4],
      feedback: [
        "Basso livello di engagement. Lavora per aumentare l'interazione con i tuoi contenuti.",
        "Engagement moderato. Continua a migliorare.",
        "Buon livello di engagement. Stai andando bene.",
        "Alto livello di engagement! Ottimo lavoro!"
      ],
    },
    {
      question:
        "8. I tuoi contenuti vengono condivisi frequentemente da altri utenti?",
      explanation:
        "La condivisione dei contenuti sui social media e su altre piattaforme aiuta a generare traffico e migliorare la visibilità del tuo sito web.",
      options: [
        "Raramente/ non lo so",
        "A volte",
        "Spesso",
        "Molto frequentemente",
      ],
      points: [1, 2, 3, 4],
      feedback: [
        "I tuoi contenuti vengono condivisi raramente. Cerca di creare contenuti più condivisibili.",
        "I tuoi contenuti vengono condivisi a volte. Continua a migliorare.",
        "I tuoi contenuti vengono condivisi spesso. Stai andando bene.",
        "I tuoi contenuti vengono condivisi molto frequentemente! Ottimo lavoro!"
      ],
    },
    {
      question:
        "9. Hai collaborato con influencer per promuovere il tuo sito web?",
      explanation:
        "Le campagne di influencer marketing possono aumentare la visibilità del tuo sito web e generare backlink di qualità attraverso le menzioni di influencer.",
      options: ["Mai/ non lo so", "Una volta", "Diverse volte", "Regolarmente"],
      points: [1, 2, 3, 4],
      feedback: [
        "Non hai mai collaborato con influencer. Considera di iniziare a farlo.",
        "Hai collaborato con influencer una volta. Continua a esplorare queste opportunità.",
        "Hai collaborato con influencer diverse volte. Stai andando bene.",
        "Collabori regolarmente con influencer! Ottimo lavoro!"
      ],
    },
    {
      question:
        "10. Quante recensioni positive ha il sito web su piattaforme di recensioni (es. Google, Yelp)?",
      explanation:
        "Le recensioni online possono influenzare significativamente la percezione del tuo sito web. Molte recensioni positive possono migliorare la tua reputazione e attrarre più visitatori, influenzando indirettamente anche la SEO.",
      options: ["0-10/ non lo so", "11-50", "51-100", "101+"],
      points: [1, 2, 3, 4],
      feedback: [
        "Poche recensioni positive. Lavora per ottenere più recensioni positive.",
        "Buon numero di recensioni positive. Continua a migliorare.",
        "Ottimo numero di recensioni positive. Stai andando bene.",
        "Eccellente numero di recensioni positive! Ottimo lavoro!"
      ],
    },
    {
      question:
        "11. Rispondi alle recensioni negative in modo tempestivo e costruttivo?",
      explanation:
        "La gestione delle recensioni negative è cruciale per mantenere una buona reputazione online. Rispondere alle recensioni negative in modo costruttivo può migliorare la percezione del tuo brand.",
      options: ["Mai/ non lo so", "Raramente", "Spesso", "Sempre"],
      points: [1, 2, 3, 4],
      feedback: [
        "Non rispondi mai alle recensioni negative. Inizia a farlo per migliorare la tua reputazione.",
        "Rispondi raramente alle recensioni negative. Continua a migliorare.",
        "Rispondi spesso alle recensioni negative. Stai andando bene.",
        "Rispondi sempre alle recensioni negative! Ottimo lavoro!"
      ],
    },
    {
      question:
        "12. Quante volte è stato menzionato il tuo sito su blog, forum e altri siti web negli ultimi 6 mesi?",
      explanation:
        "Le menzioni su altri siti web indicano che il tuo sito è riconosciuto e considerato rilevante nella tua nicchia. Più menzioni puoi ottenere, meglio è per la tua SEO off-page.",
      options: ["0-5/ non lo so", "6-20", "21-50", "51+"],
      points: [1, 2, 3, 4],
      feedback: [
        "Poche menzioni. Cerca di ottenere più visibilità sui blog e forum.",
        "Buon numero di menzioni. Continua a migliorare.",
        "Ottimo numero di menzioni. Stai andando bene.",
        "Eccellente numero di menzioni! Ottimo lavoro!"
      ],
    },
    {
      question:
        "13. Quante recensioni ha il tuo sito web su siti di settore rilevanti?",
      explanation:
        "Le recensioni su siti di settore possono influenzare positivamente la percezione del tuo sito web da parte di un pubblico specifico e migliorare la tua reputazione online.",
      options: ["Nessuna/ non lo so", "1-5", "6-10", "Più di 10"],
      points: [1, 2, 3, 4],
      feedback: [
        "Nessuna recensione su siti di settore rilevanti. Cerca di ottenerne alcune.",
        "Buon inizio con le recensioni su siti di settore. Continua a migliorare.",
        "Ottimo numero di recensioni su siti di settore. Stai andando bene.",
        "Eccellente numero di recensioni su siti di settore! Ottimo lavoro!"
      ],
    },
    {
      question:
        "14. Quanto spesso partecipi a discussioni rilevanti su forum e community online?",
      explanation:
        "Partecipare a forum e community online può aumentare la visibilità del tuo sito e generare backlink di qualità.",
      options: ["Mai/ non lo so", "Raramente", "Spesso", "Molto frequentemente"],
      points: [1, 2, 3, 4],
      feedback: [
        "Non partecipi mai a discussioni online. Inizia a farlo per migliorare la visibilità del tuo sito.",
        "Partecipi raramente a discussioni online. Continua a migliorare.",
        "Partecipi spesso a discussioni online. Stai andando bene.",
        "Partecipi molto frequentemente a discussioni online! Ottimo lavoro!"
      ],
    },
    {
      question:
        "15. Quanto frequentemente monitori i backlink dei tuoi concorrenti?",
      explanation:
        "Monitorare i backlink dei tuoi concorrenti può aiutarti a identificare nuove opportunità di link building e migliorare la tua strategia SEO off-page.",
      options: ["Mai/ non lo so", "Raramente", "Spesso", "Molto frequentemente"],
      points: [1, 2, 3, 4],
      feedback: [
        "Non monitori mai i backlink dei concorrenti. Inizia a farlo per migliorare la tua strategia.",
        "Monitori raramente i backlink dei concorrenti. Continua a migliorare.",
        "Monitori spesso i backlink dei concorrenti. Stai andando bene.",
        "Monitori molto frequentemente i backlink dei concorrenti! Ottimo lavoro!"
      ],
    },
    {
      question:
        "16. Quanti backlink hai ottenuto dai siti che linkano anche ai tuoi concorrenti?",
      explanation:
        "Ottenere backlink dai siti che linkano ai tuoi concorrenti può aiutarti a migliorare il tuo profilo di backlink.",
      options: ["Nessuno/ non lo so", "1-5", "6-10", "Più di 10"],
      points: [1, 2, 3, 4],
      feedback: [
        "Nessun backlink dai siti che linkano ai concorrenti. Cerca di ottenerne alcuni.",
        "Buon inizio con i backlink dai siti che linkano ai concorrenti. Continua a migliorare.",
        "Ottimo numero di backlink dai siti che linkano ai concorrenti. Stai andando bene.",
        "Eccellente numero di backlink dai siti che linkano ai concorrenti! Ottimo lavoro!"
      ],
    },
    {
      question:
        "17. Quante citazioni NAP ha il tuo sito web su directory e siti web locali?",
      explanation:
        "Le citazioni NAP (Nome, Indirizzo, Telefono) su siti web locali e directory sono importanti per la SEO locale e aiutano a migliorare la visibilità nei risultati di ricerca locali.",
      options: ["Nessuna/ non lo so", "1-10", "11-30", "Più di 30"],
      points: [1, 2, 3, 4],
      feedback: [
        "Nessuna citazione NAP. Cerca di ottenerne alcune per migliorare la SEO locale.",
        "Buon inizio con le citazioni NAP. Continua a migliorare.",
        "Ottimo numero di citazioni NAP. Stai andando bene.",
        "Eccellente numero di citazioni NAP! Ottimo lavoro!"
      ],
    },
    {
      question:
        "18. Quante recensioni positive ha il tuo sito web su Google My Business?",
      explanation:
        "Le recensioni su Google My Business sono cruciali per la SEO locale. Molte recensioni positive possono migliorare il posizionamento del tuo sito nei risultati di ricerca locali.",
      options: ["0-10/ non lo so", "11-50", "51-100", "101+"],
      points: [1, 2, 3, 4],
      feedback: [
        "Poche recensioni positive su Google My Business. Cerca di ottenerne di più.",
        "Buon numero di recensioni positive su Google My Business. Continua a migliorare.",
        "Ottimo numero di recensioni positive su Google My Business. Stai andando bene.",
        "Eccellente numero di recensioni positive su Google My Business! Ottimo lavoro!"
      ],
    },
    {
      question:
        "19. Quanto spesso partecipi a eventi locali rilevanti per il tuo settore?",
      explanation:
        "Partecipare a eventi locali e ottenere menzioni sui siti web di questi eventi può migliorare la visibilità del tuo sito e generare backlink di qualità.",
      options: ["Mai/ non lo so", "Raramente", "Spesso", "Molto frequentemente"],
      points: [1, 2, 3, 4],
      feedback: [
        "Non partecipi mai a eventi locali. Inizia a farlo per migliorare la visibilità del tuo sito.",
        "Partecipi raramente a eventi locali. Continua a migliorare.",
        "Partecipi spesso a eventi locali. Stai andando bene.",
        "Partecipi molto frequentemente a eventi locali! Ottimo lavoro!"
      ],
    },
    {
      question:
        "20. Quante collaborazioni hai stabilito con altri siti web negli ultimi 12 mesi?",
      explanation:
        "Collaborare con altri siti web può generare backlink di qualità e aumentare la visibilità del tuo sito.",
      options: ["Nessuna/ non lo so", "1-5", "6-10", "Più di 10"],
      points: [1, 2, 3, 4],
      feedback: [
        "Nessuna collaborazione con altri siti web. Cerca di stabilirne alcune.",
        "Buon inizio con le collaborazioni con altri siti web. Continua a migliorare.",
        "Ottimo numero di collaborazioni con altri siti web. Stai andando bene.",
        "Eccellente numero di collaborazioni con altri siti web! Ottimo lavoro!"
      ],
    },
  ];
  