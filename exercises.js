var DB_RAW = {
  "esercizi": [
    {
      "id": "push_up",
      "name": "Push-up",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "push_up_wide",
        "diamond_push_up",
        "archer_push_up",
        "pseudo_planche_push_up"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x8",
        "standard": "4x12",
        "intenso": "5x15"
      },
      "media": null,
      "descrizione": "Posizione plank con mani larghezza spalle. Piega i gomiti abbassando il petto fino a sfiorare il suolo, poi spingi fino a braccia tese mantenendo il corpo rigido. Senti lavorare: petto, tricipiti e spalle anteriori. Errore comune: lasciare i fianchi cedere verso il basso o sollevarsi."
    },
    {
      "id": "push_up_wide",
      "name": "Push-up Wide",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "archer_push_up",
        "dips"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x8",
        "standard": "3x12",
        "intenso": "4x12"
      },
      "media": null,
      "descrizione": "Come il push-up standard ma con le mani più larghe delle spalle. Scendi lentamente in 3 secondi, poi spingi. Senti lavorare: petto (più enfasi esterna), tricipiti. Errore comune: aprire troppo i gomiti verso l'esterno anziché tenerli a circa 45°."
    },
    {
      "id": "diamond_push_up",
      "name": "Diamond Push-up",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "tricipiti",
        "petto",
        "spalle"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pseudo_planche_push_up"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x6",
        "standard": "3x10",
        "intenso": "4x12"
      },
      "media": null,
      "descrizione": "Mani vicine sotto il petto a formare un triangolo con le dita. Gomiti che scivolano vicino al busto durante la discesa. Senti lavorare: tricipiti, con contributo del petto interno. Errore comune: aprire i gomiti lateralmente, che trasforma l'esercizio in un push-up normale."
    },
    {
      "id": "archer_push_up",
      "name": "Archer Push-up",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle"
      ],
      "difficolta": 4,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "one_arm_push_up"
      ],
      "richiede": [
        "push_up_wide"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3/lato",
        "standard": "3x4/lato",
        "intenso": "4x5/lato"
      },
      "media": null,
      "descrizione": "Mani larghe, un braccio esegue il push-up mentre l'altro rimane teso lateralmente come supporto. Alterna lato ad ogni ripetizione. Senti lavorare: petto e tricipiti del lato che lavora, spalla del lato teso. Errore comune: ruotare il busto verso il lato che spinge."
    },
    {
      "id": "pike_push_up",
      "name": "Pike Push-up",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "tricipiti",
        "core"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pike_push_up_elevato",
        "handstand_push_up_wall"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Posizione a V rovesciata con anche alte e mani a terra. Piega i gomiti abbassando la testa verso il suolo tra le mani, poi spingi su. Senti lavorare: deltoidi anteriori e tricipiti. Errore comune: flettere le ginocchia o non scendere abbastanza con la testa."
    },
    {
      "id": "pike_push_up_elevato",
      "name": "Pike Push-up con piedi elevati",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "tricipiti",
        "core"
      ],
      "difficolta": 4,
      "attrezzo": [
        "terra",
        "struttura"
      ],
      "propedeutico_a": [
        "handstand_push_up_wall"
      ],
      "richiede": [
        "pike_push_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x4",
        "standard": "3x6",
        "intenso": "4x8"
      },
      "media": null,
      "descrizione": "Come il pike push-up ma con i piedi appoggiati su una panchina o struttura. Il corpo forma un angolo più verticale. Senti lavorare: deltoidi e tricipiti con intensità maggiore del pike normale. Errore comune: lasciare che le anche scendano durante il movimento."
    },
    {
      "id": "pseudo_planche_push_up",
      "name": "Pseudo Planche Push-up",
      "categoria": "spinta",
      "tipo": "mix",
      "muscoli": [
        "petto",
        "spalle",
        "core",
        "tricipiti"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "planche_push_up"
      ],
      "richiede": [
        "diamond_push_up",
        "planche_lean"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x5",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Posizione di push-up con le mani ruotate verso i piedi e le spalle proiettate avanti rispetto ai polsi. Scendi mantenendo questa inclinazione. Senti lavorare: petto inferiore, deltoide anteriore e core. Errore comune: non mantenere la protrazione scapolare e lasciare che le spalle arretrino."
    },
    {
      "id": "one_arm_push_up",
      "name": "One Arm Push-up",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle",
        "core",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "archer_push_up"
      ],
      "recupero": 120,
      "skill_target": true,
      "pattern": "horizontal_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x2/lato",
        "standard": "3x3/lato",
        "intenso": "4x4/lato"
      },
      "media": null,
      "descrizione": "Push-up su un solo braccio con i piedi larghi per bilanciamento. La mano libera si appoggia alla schiena. Corpo rigido, nessuna rotazione del busto. Senti lavorare: petto, tricipite e core del lato attivo. Errore comune: ruotare il busto o aprire eccessivamente i piedi."
    },
    {
      "id": "dips",
      "name": "Dips",
      "categoria": "spinta",
      "tipo": "mix",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle"
      ],
      "difficolta": 2,
      "attrezzo": [
        "parallele alte"
      ],
      "propedeutico_a": [
        "russian_dips",
        "korean_dips"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x6",
        "standard": "4x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Appoggiato sulle parallele a braccia tese, scendi piegando i gomiti fino a 90°. Per i tricipiti: busto verticale. Per il petto: inclinati leggermente in avanti. Senti lavorare: tricipiti, petto e deltoide anteriore. Errore comune: non scendere abbastanza o alzare le spalle verso le orecchie."
    },
    {
      "id": "russian_dips",
      "name": "Russian Dips",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "tricipiti",
        "petto",
        "spalle"
      ],
      "difficolta": 4,
      "attrezzo": [
        "parallele alte"
      ],
      "propedeutico_a": [
        "muscle_up"
      ],
      "richiede": [
        "dips"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Sulle parallele, scendi in dips poi abbassa gli avambracci fino ad appoggiarli sulle parallele, poi risali in ordine inverso. Simula la transizione del muscle-up. Senti lavorare: tricipiti, petto e spalle nella transizione. Errore comune: fare la transizione in modo brusco anziché controllato."
    },
    {
      "id": "korean_dips",
      "name": "Korean Dips",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "tricipiti",
        "petto"
      ],
      "difficolta": 4,
      "attrezzo": [
        "parallele basse",
        "sbarra"
      ],
      "propedeutico_a": [
        "tuck_back_lever",
        "straddle_back_lever"
      ],
      "richiede": [
        "dips"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "3x6"
      },
      "media": null,
      "descrizione": "Mani dietro il corpo su sbarra bassa con presa prona, busto eretto. Scendi piegando i gomiti portando le spalle in massima estensione posteriore. Senti lavorare: tricipiti, deltoide posteriore e petto inferiore. Errore comune: non scendere abbastanza o inarcare eccessivamente la schiena."
    },
    {
      "id": "handstand_push_up_wall",
      "name": "Handstand Push-up (muro)",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "tricipiti",
        "core"
      ],
      "difficolta": 4,
      "attrezzo": [
        "muro"
      ],
      "propedeutico_a": [
        "handstand_hold",
        "handstand_push_up_free"
      ],
      "richiede": [
        "pike_push_up_elevato",
        "wall_handstand"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "In verticale con i piedi contro il muro, scendi piegando i gomiti fino a sfiorare il suolo con la testa, poi spingi su. Senti lavorare: deltoidi e tricipiti. Errore comune: lasciare che i gomiti si aprano verso l'esterno invece di rimanere circa a 45°."
    },
    {
      "id": "planche_lean",
      "name": "Planche Lean",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "core",
        "tricipiti"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra",
        "parallele basse"
      ],
      "propedeutico_a": [
        "tuck_planche"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x8s",
        "standard": "4x12s",
        "intenso": "4x15s"
      },
      "media": null,
      "descrizione": "Posizione di push-up con le spalle molto avanti rispetto alle mani. Tieni la posizione con braccia tese e corpo rigido. Senti lavorare: deltoide anteriore, petto e core stabilizzatore. Errore comune: piegare i gomiti o non mantenere la protrazione scapolare."
    },
    {
      "id": "tuck_planche",
      "name": "Tuck Planche Hold",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "core",
        "tricipiti",
        "avambracci"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra",
        "parallele basse"
      ],
      "propedeutico_a": [
        "advanced_tuck_planche",
        "pseudo_planche_push_up"
      ],
      "richiede": [
        "planche_lean"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x6s",
        "standard": "4x10s",
        "intenso": "4x12s"
      },
      "media": null,
      "descrizione": "Appoggio sulle mani con spalle avanti rispetto ai polsi, gambe raccolte al petto, corpo sollevato da terra. Scapole in massima protrazione. Senti lavorare: deltoide anteriore, core e avambracci. Errore comune: lasciare che le anche scendano o che le spalle arretrino rispetto ai polsi."
    },
    {
      "id": "advanced_tuck_planche",
      "name": "Advanced Tuck Planche",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "core",
        "tricipiti"
      ],
      "difficolta": 5,
      "attrezzo": [
        "terra",
        "parallele basse"
      ],
      "propedeutico_a": [
        "straddle_planche"
      ],
      "richiede": [
        "tuck_planche"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x5s",
        "standard": "4x8s",
        "intenso": "4x10s"
      },
      "media": null,
      "descrizione": "Come il tuck planche ma con la schiena piatta e le cosce parallele al suolo invece di essere raccolte al petto. Senti lavorare: deltoide anteriore e core con intensità maggiore. Errore comune: non mantenere la schiena piatta, che riduce la difficoltà."
    },
    {
      "id": "straddle_planche",
      "name": "Straddle Planche",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "core",
        "tricipiti"
      ],
      "difficolta": 5,
      "attrezzo": [
        "terra",
        "parallele basse"
      ],
      "propedeutico_a": [
        "full_planche",
        "planche_push_up"
      ],
      "richiede": [
        "advanced_tuck_planche"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x4s",
        "standard": "4x6s",
        "intenso": "4x8s"
      },
      "media": null,
      "descrizione": "Corpo parallelo al suolo con gambe aperte lateralmente, braccia tese e scapole in protrazione massima. Senti lavorare: deltoide anteriore, petto e core in modo totale. Errore comune: lasciare che le anche scendano sotto la linea delle spalle."
    },
    {
      "id": "support_hold",
      "name": "Support Hold",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "tricipiti",
        "core"
      ],
      "difficolta": 2,
      "attrezzo": [
        "parallele alte"
      ],
      "propedeutico_a": [
        "dips",
        "tuck_planche",
        "l_sit"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x15s",
        "standard": "3x25s",
        "intenso": "4x30s"
      },
      "media": null,
      "descrizione": "Sulle parallele a braccia completamente tese, spalle abbassate lontano dalle orecchie, corpo verticale. Tieni la posizione. Senti lavorare: tricipiti, deltoide e stabilizzatori del cingolo scapolare. Errore comune: alzare le spalle verso le orecchie invece di tenerle depresse."
    },
    {
      "id": "australian_row",
      "name": "Australian Row",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "spalle",
        "core"
      ],
      "difficolta": 2,
      "attrezzo": [
        "sbarra bassa"
      ],
      "propedeutico_a": [
        "pull_up"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x8",
        "standard": "3x10",
        "intenso": "4x12"
      },
      "media": null,
      "descrizione": "Sdraiato sotto la sbarra bassa con corpo rigido inclinato, presa prona larga. Tira il petto verso la sbarra retraendo le scapole, poi abbassa controllato. Senti lavorare: gran dorsale, bicipiti e romboidi. Errore comune: flettere i fianchi invece di mantenere il corpo rigido come un asse."
    },
    {
      "id": "scapular_pull_up",
      "name": "Scapular Pull-up",
      "categoria": "tirata",
      "tipo": "mix",
      "muscoli": [
        "dorsali",
        "spalle",
        "avambracci"
      ],
      "difficolta": 1,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "pull_up"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x8",
        "standard": "3x10",
        "intenso": "3x12"
      },
      "media": null,
      "descrizione": "Appeso alla sbarra a braccia completamente tese. Muovi solo le scapole verso il basso senza piegare i gomiti, sollevando il corpo di pochi centimetri. Senti lavorare: gran dorsale nella sua funzione di depressione scapolare. Errore comune: piegare i gomiti trasformandolo in un pull-up parziale."
    },
    {
      "id": "pull_up",
      "name": "Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "core",
        "spalle",
        "avambracci"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "chin_up",
        "archer_pull_up",
        "commando_pull_up",
        "muscle_up"
      ],
      "richiede": [
        "australian_row",
        "scapular_pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5",
        "standard": "4x8",
        "intenso": "5x10"
      },
      "media": null,
      "descrizione": "Appeso alla sbarra con presa prona larga, partenza da braccia completamente tese. Tira fino a portare il mento sopra la sbarra, poi abbassa controllato. Senti lavorare: gran dorsale, bicipiti e core. Errore comune: usare lo slancio delle gambe o non tornare al dead hang completo tra le ripetizioni."
    },
    {
      "id": "chin_up",
      "name": "Chin-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "bicipiti",
        "dorsali",
        "core",
        "avambracci"
      ],
      "difficolta": 2,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "archer_pull_up",
        "one_arm_pull_up"
      ],
      "richiede": [
        "pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Come il pull-up ma con presa supina stretta. Tira portando il mento sopra la sbarra con i gomiti vicini al busto. Senti lavorare: bicipiti in misura maggiore rispetto al pull-up, poi dorsali. Errore comune: aprire i gomiti lateralmente che riduce il contributo dei bicipiti."
    },
    {
      "id": "commando_pull_up",
      "name": "Commando Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "core",
        "spalle"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "archer_pull_up"
      ],
      "richiede": [
        "pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3/lato",
        "standard": "3x4/lato",
        "intenso": "4x5/lato"
      },
      "media": null,
      "descrizione": "Presa alternata sulla sbarra con una mano prona e una supina, testa di lato. Tira portando la testa a un lato della sbarra. Alterna lato ad ogni ripetizione. Senti lavorare: dorsali, bicipiti e obliqui. Errore comune: non alternare il lato verso cui si porta la testa."
    },
    {
      "id": "archer_pull_up",
      "name": "Archer Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "spalle",
        "core",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "assisted_one_arm_pull_up",
        "one_arm_pull_up"
      ],
      "richiede": [
        "pull_up",
        "chin_up"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x2/lato",
        "standard": "3x4/lato",
        "intenso": "4x5/lato"
      },
      "media": null,
      "descrizione": "Presa larga sulla sbarra, un braccio tira mentre l'altro rimane teso lateralmente come supporto. Tira verso il lato del braccio che lavora. Senti lavorare: dorsale e bicipite del lato che tira in modo quasi unilaterale. Errore comune: non tenere il braccio di supporto completamente teso."
    },
    {
      "id": "one_arm_pull_up",
      "name": "One Arm Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "core",
        "spalle",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "archer_pull_up"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "vertical_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x1/lato",
        "standard": "3x2/lato",
        "intenso": "4x3/lato"
      },
      "media": null,
      "descrizione": "Appeso su un solo braccio, l'altro libero o appoggiato al polso. Tira fino a portare il mento sopra la sbarra con controllo totale. Senti lavorare: dorsale, bicipite e core del lato attivo in modo massimale. Errore comune: ruotare il busto usando l'inerzia invece della forza pura."
    },
    {
      "id": "muscle_up",
      "name": "Muscle-up",
      "categoria": "mix",
      "tipo": "esplosiva",
      "muscoli": [
        "dorsali",
        "petto",
        "tricipiti",
        "bicipiti",
        "spalle",
        "core"
      ],
      "difficolta": 5,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "muscle_up_strict"
      ],
      "richiede": [
        "pull_up",
        "dips",
        "russian_dips",
        "explosive_pull_up"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "mix",
      "fase": "skill",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Pull-up esplosivo portando il petto sopra la sbarra, poi nella transizione porta i gomiti sopra e spingi fino a braccia tese come nei dips. Senti lavorare: dorsali, petto e tricipiti in sequenza esplosiva. Errore comune: usare troppo swing e non avere la forza per la transizione."
    },
    {
      "id": "muscle_up_strict",
      "name": "Muscle-up Strict",
      "categoria": "mix",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "petto",
        "tricipiti",
        "bicipiti",
        "spalle",
        "core"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "muscle_up"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "mix",
      "fase": "skill",
      "sets": {
        "leggero": "3x2",
        "standard": "3x3",
        "intenso": "4x4"
      },
      "media": null,
      "descrizione": "Come il muscle-up normale ma senza nessun impulso delle gambe. Tira lentamente e controlla la transizione. Senti lavorare: dorsali, petto e tricipiti con controllo totale. Errore comune: usare anche solo un piccolo slancio delle gambe."
    },
    {
      "id": "muscle_up_negativa",
      "name": "Muscle-up Negativa",
      "categoria": "mix",
      "tipo": "eccentrica",
      "muscoli": [
        "dorsali",
        "petto",
        "tricipiti",
        "spalle",
        "core"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "muscle_up"
      ],
      "richiede": [
        "pull_up",
        "dips"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "mix",
      "fase": "skill",
      "sets": {
        "leggero": "3x2",
        "standard": "3x3",
        "intenso": "4x4"
      },
      "media": null,
      "descrizione": "Parti dalla posizione alta a braccia tese sopra la sbarra. Abbassati lentamente attraverso la transizione fino al dead hang, resistendo in ogni fase. Senti lavorare: dorsali, petto e tricipiti in eccentrica. Errore comune: cadere velocemente attraverso la transizione invece di resistere."
    },
    {
      "id": "tuck_front_lever",
      "name": "Tuck Front Lever Hold",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "dorsali",
        "core",
        "spalle",
        "bicipiti"
      ],
      "difficolta": 2,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "advanced_tuck_front_lever",
        "tuck_front_lever_raise"
      ],
      "richiede": [
        "pull_up",
        "scapular_pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x8s",
        "standard": "4x10s",
        "intenso": "4x12s"
      },
      "media": null,
      "descrizione": "Appeso alla sbarra con braccia tese, porta le gambe raccolte al petto e il corpo parallelo al suolo. Tieni la posizione con scapole in retrazione. Senti lavorare: gran dorsale, core e bicipiti in modo isometrico. Errore comune: lasciare che le anche scendano sotto la linea delle spalle."
    },
    {
      "id": "tuck_front_lever_raise",
      "name": "Tuck Front Lever Raise",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "core",
        "spalle",
        "bicipiti"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "one_leg_front_lever"
      ],
      "richiede": [
        "tuck_front_lever"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Da dead hang, solleva il corpo in posizione tuck front lever in modo lento e controllato, poi abbassa. Senti lavorare: dorsali e core nella fase di sollevamento. Errore comune: usare lo slancio delle gambe invece di sollevare con la forza della schiena."
    },
    {
      "id": "one_leg_front_lever",
      "name": "One Leg Front Lever",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "dorsali",
        "core",
        "spalle",
        "bicipiti"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "straddle_front_lever"
      ],
      "richiede": [
        "tuck_front_lever"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x5s",
        "standard": "4x7s",
        "intenso": "4x10s"
      },
      "media": null,
      "descrizione": "Front lever con una gamba tesa e parallela al suolo, l'altra raccolta al petto. Senti lavorare: dorsali, core e bicipiti con carico intermedio tra tuck e straddle. Errore comune: lasciare che la gamba tesa scenda rompendo il parallelo."
    },
    {
      "id": "straddle_front_lever",
      "name": "Straddle Front Lever",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "dorsali",
        "core",
        "spalle"
      ],
      "difficolta": 5,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "full_front_lever"
      ],
      "richiede": [
        "one_leg_front_lever"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x4s",
        "standard": "3x6s",
        "intenso": "4x8s"
      },
      "media": null,
      "descrizione": "Front lever con gambe aperte lateralmente e tese, corpo parallelo al suolo. Senti lavorare: dorsali e core con un carico vicino al full front lever. Errore comune: chiudere le gambe o abbassare le anche."
    },
    {
      "id": "full_front_lever",
      "name": "Full Front Lever",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "dorsali",
        "core",
        "spalle",
        "bicipiti",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "straddle_front_lever"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x3s",
        "standard": "4x5s",
        "intenso": "4x6s"
      },
      "media": null,
      "descrizione": "Corpo completamente parallelo al suolo appeso alla sbarra, braccia tese, gambe unite e corpo rigido. Senti lavorare: gran dorsale, core e bicipiti al massimo. Errore comune: lasciare scendere i piedi che riduce il parallelo."
    },
    {
      "id": "tuck_back_lever",
      "name": "Tuck Back Lever",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "bicipiti",
        "core"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "straddle_back_lever",
        "korean_dips"
      ],
      "richiede": [
        "pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x6s",
        "standard": "3x10s",
        "intenso": "4x12s"
      },
      "media": null,
      "descrizione": "Da appeso, ruota il corpo all'indietro con gambe raccolte al petto fino a portare il corpo parallelo al suolo sotto la sbarra. Senti lavorare: spalle in estensione massima, bicipiti e core. Errore comune: non raggiungere il parallelo completo fermandosi troppo in alto."
    },
    {
      "id": "straddle_back_lever",
      "name": "Straddle Back Lever",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "bicipiti",
        "core"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "full_back_lever"
      ],
      "richiede": [
        "tuck_back_lever"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x4s",
        "standard": "3x6s",
        "intenso": "4x8s"
      },
      "media": null,
      "descrizione": "Come il tuck back lever ma con le gambe aperte lateralmente e tese. Senti lavorare: spalle e petto con carico maggiore del tuck. Errore comune: lasciare che le gambe si chiudano o che il bacino scenda."
    },
    {
      "id": "dead_hang",
      "name": "Dead Hang",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "avambracci",
        "spalle",
        "dorsali"
      ],
      "difficolta": 2,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "pull_up",
        "tuck_front_lever"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x20s",
        "standard": "3x30s",
        "intenso": "3x max"
      },
      "media": null,
      "descrizione": "Appeso alla sbarra con presa attiva, scapole abbassate e core leggermente contratto. Mantieni la posizione respirando. Senti lavorare: avambracci, spalle e gran dorsale in allungamento. Errore comune: lasciare le spalle passivamente alzate verso le orecchie invece di tenerle depresse."
    },
    {
      "id": "handstand_hold",
      "name": "Freestanding Handstand Hold",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "core",
        "tricipiti",
        "avambracci"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "handstand_push_up_free"
      ],
      "richiede": [
        "wall_handstand",
        "pike_push_up_elevato"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x10s",
        "standard": "4x20s",
        "intenso": "4x30s"
      },
      "media": null,
      "descrizione": "Verticale libera sulle mani senza appoggi. Allineamento talloni-glutei-spalle-polsi. Usa le dita per aggiustare il bilanciamento. Senti lavorare: spalle, core e avambracci. Errore comune: inarcare la schiena invece di mantenere il corpo in linea retta."
    },
    {
      "id": "wall_handstand",
      "name": "Wall Handstand Hold",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "core",
        "tricipiti"
      ],
      "difficolta": 3,
      "attrezzo": [
        "muro"
      ],
      "propedeutico_a": [
        "handstand_hold",
        "handstand_push_up_wall"
      ],
      "richiede": [
        "pike_push_up"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x15s",
        "standard": "4x25s",
        "intenso": "4x30s"
      },
      "media": null,
      "descrizione": "Verticale con i piedi appoggiati al muro, corpo il più dritto possibile. Concentrati sull'allineamento e sulla pressione attiva delle dita. Senti lavorare: spalle e core. Errore comune: avvicinarsi troppo al muro creando un arco nella schiena."
    },
    {
      "id": "l_sit",
      "name": "L-sit",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "spalle",
        "tricipiti",
        "quadricipiti",
        "flessori anca"
      ],
      "difficolta": 3,
      "attrezzo": [
        "parallele basse",
        "terra"
      ],
      "propedeutico_a": [
        "straddle_l_sit",
        "v_sit"
      ],
      "richiede": [
        "support_hold",
        "pike_hold"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x8s",
        "standard": "3x15s",
        "intenso": "4x20s"
      },
      "media": null,
      "descrizione": "Appoggiato sulle mani o parallele basse a braccia tese, solleva il corpo e tieni le gambe tese e parallele al suolo. Scapole depresse. Senti lavorare: core anteriore, flessori dell'anca e tricipiti. Errore comune: non tenere le gambe completamente tese o lasciarle scendere sotto il parallelo."
    },
    {
      "id": "v_sit",
      "name": "V-sit",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "spalle",
        "tricipiti",
        "quadricipiti",
        "flessori anca"
      ],
      "difficolta": 4,
      "attrezzo": [
        "parallele basse",
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "l_sit"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x4s",
        "standard": "3x6s",
        "intenso": "4x8s"
      },
      "media": null,
      "descrizione": "Come l'L-sit ma con il busto inclinato all'indietro e le gambe sollevate più in alto formando una V. Senti lavorare: core profondo e flessori dell'anca con compressione massima. Errore comune: piegare le ginocchia per compensare la mancanza di flessibilità dell'anca."
    },
    {
      "id": "pike_hold",
      "name": "Pike Hold compresso",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "flessori anca",
        "quadricipiti"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra",
        "parallele basse"
      ],
      "propedeutico_a": [
        "l_sit",
        "v_sit"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x15s",
        "standard": "3x25s",
        "intenso": "3x30s"
      },
      "media": null,
      "descrizione": "Seduto con gambe tese davanti a te, comprimi il busto verso le cosce tenendo le mani a terra ai lati. Senti lavorare: flessori dell'anca e core anteriore nella compressione. Errore comune: piegare le ginocchia invece di mantenere la pressione con le gambe tese."
    },
    {
      "id": "hollow_body",
      "name": "Hollow Body Hold",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "spalle",
        "glutei",
        "quadricipiti"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "l_sit",
        "tuck_planche",
        "handstand_hold"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x20s",
        "standard": "3x25s",
        "intenso": "3x35s"
      },
      "media": null,
      "descrizione": "Sdraiato, premi la lombare contro il suolo, solleva braccia tese sopra la testa e gambe tese a circa 20-30 cm da terra. Tieni senza toccare. Senti lavorare: core anteriore completo e glutei. Errore comune: lasciare che la schiena si sollevi da terra perdendo la tensione lombare."
    },
    {
      "id": "arch_body",
      "name": "Arch Body Hold",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "lombari",
        "glutei",
        "spalle",
        "femorali"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "tuck_back_lever",
        "full_back_lever"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x15s",
        "standard": "3x20s",
        "intenso": "3x25s"
      },
      "media": null,
      "descrizione": "A pancia in giù, solleva contemporaneamente braccia e gambe tese il più in alto possibile. Tieni. Senti lavorare: lombari, glutei e parte posteriore delle spalle. Errore comune: piegare le ginocchia o le braccia invece di tenerle completamente tese."
    },
    {
      "id": "hanging_leg_raise",
      "name": "Hanging Leg Raise",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "core",
        "flessori anca",
        "dorsali",
        "avambracci"
      ],
      "difficolta": 2,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "toes_to_bar",
        "windshield_wiper",
        "tuck_front_lever"
      ],
      "richiede": [
        "dead_hang"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x6",
        "standard": "3x10",
        "intenso": "4x12"
      },
      "media": null,
      "descrizione": "Appeso alla sbarra, solleva le gambe tese fino all'orizzontale o oltre senza dondolare. Abbassa lentamente. Senti lavorare: core anteriore basso e flessori dell'anca. Errore comune: usare lo slancio e l'oscillazione invece di partire da fermo."
    },
    {
      "id": "toes_to_bar",
      "name": "Toes to Bar",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "core",
        "flessori anca",
        "dorsali"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "windshield_wiper"
      ],
      "richiede": [
        "hanging_leg_raise"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x5",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Da dead hang, porta i piedi a toccare la sbarra con gambe tese senza oscillare. Senti lavorare: core anteriore, flessori dell'anca e dorsali per la stabilità. Errore comune: piegare le ginocchia o usare l'oscillazione del corpo."
    },
    {
      "id": "windshield_wiper",
      "name": "Windshield Wiper",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "obliqui",
        "core",
        "dorsali",
        "avambracci"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "toes_to_bar"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x4/lato",
        "standard": "3x6/lato",
        "intenso": "4x8/lato"
      },
      "media": null,
      "descrizione": "Appeso, porta le gambe tese a 90° poi ruotale lateralmente da un lato all'altro come i tergicristalli. Senti lavorare: obliqui e core laterale in modo intenso. Errore comune: piegare le ginocchia per ridurre il carico invece di mantenere le gambe tese."
    },
    {
      "id": "dragon_flag_tuck",
      "name": "Tuck Dragon Flag",
      "categoria": "core",
      "tipo": "mix",
      "muscoli": [
        "core",
        "lombari",
        "spalle",
        "glutei"
      ],
      "difficolta": 3,
      "attrezzo": [
        "panchina",
        "struttura"
      ],
      "propedeutico_a": [
        "dragon_flag"
      ],
      "richiede": [
        "hollow_body",
        "hanging_leg_raise"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Sdraiato su una panchina, tieni la struttura sopra la testa. Gambe raccolte al petto. Abbassati lentamente mantenendo il controllo, poi risali. Senti lavorare: core completo e spalle che stabilizzano. Errore comune: cedere troppo velocemente invece di resistere nella discesa."
    },
    {
      "id": "dragon_flag",
      "name": "Dragon Flag",
      "categoria": "core",
      "tipo": "mix",
      "muscoli": [
        "core",
        "lombari",
        "spalle",
        "quadricipiti",
        "glutei"
      ],
      "difficolta": 4,
      "attrezzo": [
        "panchina",
        "struttura"
      ],
      "propedeutico_a": [],
      "richiede": [
        "dragon_flag_tuck"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x3",
        "standard": "3x4",
        "intenso": "4x5"
      },
      "media": null,
      "descrizione": "Sdraiato su una panchina, tieni la struttura sopra la testa. Corpo rigido come un'asse. Abbassati lentamente dalla verticale verso l'orizzontale, poi risali. Senti lavorare: core completo, lombari e quadricipiti. Errore comune: flettere i fianchi invece di mantenere il corpo in linea retta."
    },
    {
      "id": "side_plank",
      "name": "Side Plank",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "obliqui",
        "core",
        "spalle",
        "glutei"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "copenhagen_plank",
        "human_flag"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x15s/lato",
        "standard": "3x25s/lato",
        "intenso": "3x30s/lato"
      },
      "media": null,
      "descrizione": "Appoggio laterale su un avambraccio o mano, corpo rigido con fianchi sollevati. Senti lavorare: obliqui, glutei e spalle del lato di appoggio. Errore comune: lasciare che i fianchi scendano verso il suolo o ruotino in avanti."
    },
    {
      "id": "copenhagen_plank",
      "name": "Copenhagen Plank",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "obliqui",
        "adduttori",
        "core",
        "spalle",
        "glutei"
      ],
      "difficolta": 3,
      "attrezzo": [
        "struttura",
        "panchina"
      ],
      "propedeutico_a": [
        "human_flag"
      ],
      "richiede": [
        "side_plank"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x15s/lato",
        "standard": "3x20s/lato",
        "intenso": "3x25s/lato"
      },
      "media": null,
      "descrizione": "Plank laterale con il piede superiore appoggiato su una panchina e quello inferiore sollevato. Tieni il corpo rigido. Senti lavorare: obliqui, adduttori e spalle del lato di appoggio. Errore comune: lasciare scendere i fianchi o appoggiare il piede inferiore a terra."
    },
    {
      "id": "push_up_side_plank",
      "name": "Push-up to Side Plank",
      "categoria": "mix",
      "tipo": "mix",
      "muscoli": [
        "petto",
        "tricipiti",
        "obliqui",
        "core",
        "spalle"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "push_up",
        "side_plank"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "core",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x4/lato",
        "standard": "3x6/lato",
        "intenso": "4x6/lato"
      },
      "media": null,
      "descrizione": "Esegui un push-up, in cima ruota il corpo di 90° aprendo un braccio verso il cielo in side plank. Torna e alterna lato. Senti lavorare: petto, tricipiti e obliqui in sequenza. Errore comune: non completare la rotazione del corpo rimanendo a metà."
    },
    {
      "id": "human_flag_tuck",
      "name": "Tuck Human Flag",
      "categoria": "mix",
      "tipo": "isometrica",
      "muscoli": [
        "obliqui",
        "core",
        "spalle",
        "dorsali",
        "bicipiti",
        "tricipiti"
      ],
      "difficolta": 4,
      "attrezzo": [
        "palo verticale",
        "struttura"
      ],
      "propedeutico_a": [
        "human_flag"
      ],
      "richiede": [
        "side_plank",
        "copenhagen_plank",
        "pull_up"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "mix",
      "fase": "skill",
      "sets": {
        "leggero": "3x4s/lato",
        "standard": "3x6s/lato",
        "intenso": "4x8s/lato"
      },
      "media": null,
      "descrizione": "Aggrappato al palo verticale con un braccio che spinge e uno che tira, porta il corpo laterale con le gambe raccolte al petto. Senti lavorare: obliqui, dorsali e spalle in modo totale. Errore comune: non bilanciare correttamente la spinta e la trazione tra i due bracci."
    },
    {
      "id": "pistol_squat_assistito",
      "name": "Pistol Squat assistito",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "core"
      ],
      "difficolta": 2,
      "attrezzo": [
        "struttura"
      ],
      "propedeutico_a": [
        "pistol_squat"
      ],
      "richiede": [
        "squat"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3/gamba",
        "standard": "3x5/gamba",
        "intenso": "4x6/gamba"
      },
      "media": null,
      "descrizione": "In piedi su una gamba, l'altra tesa in avanti. Tieni una struttura per bilanciamento. Scendi fino a coscia parallela al suolo, poi risali. Senti lavorare: quadricipiti e glutei del lato di appoggio. Errore comune: usare la struttura per tirarsi su invece di spingersi con la gamba."
    },
    {
      "id": "pistol_squat",
      "name": "Pistol Squat",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "core",
        "flessori anca",
        "femorali",
        "polpacci"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "pistol_squat_assistito"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3/gamba",
        "standard": "3x4/gamba",
        "intenso": "4x5/gamba"
      },
      "media": null,
      "descrizione": "Squat su una gamba sola libero con l'altra tesa in avanti. Scendi fino al fondo mantenendo il tallone a terra, poi risali con controllo. Senti lavorare: quadricipiti, glutei, femorali e core. Errore comune: lasciare che il busto crolli in avanti o che il ginocchio collassi verso l'interno."
    },
    {
      "id": "squat",
      "name": "Squat",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "core"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pistol_squat_assistito",
        "bulgarian_split_squat",
        "jump_squat"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x10",
        "standard": "3x15",
        "intenso": "4x20"
      },
      "media": null,
      "descrizione": "In piedi con i piedi larghezza spalle, scendi mantenendo la schiena neutra e le ginocchia in linea con i piedi fino a coscia parallela al suolo. Senti lavorare: quadricipiti, glutei e core stabilizzatore. Errore comune: lasciare che le ginocchia collassino verso l'interno durante la discesa."
    },
    {
      "id": "jump_squat",
      "name": "Jump Squat",
      "categoria": "gambe",
      "tipo": "esplosiva",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "polpacci"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "step_up_esplosivo"
      ],
      "richiede": [
        "squat"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x6",
        "standard": "3x10",
        "intenso": "4x12"
      },
      "media": null,
      "descrizione": "Squat normale, poi in cima spingi esplosivamente verso l'alto saltando. Atterraggio morbido con le ginocchia che ammortizzano il colpo. Senti lavorare: quadricipiti, glutei e polpacci con reclutamento esplosivo. Errore comune: non ammortizzare l'atterraggio, che carica le articolazioni."
    },
    {
      "id": "bulgarian_split_squat",
      "name": "Bulgarian Split Squat",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "core"
      ],
      "difficolta": 3,
      "attrezzo": [
        "struttura",
        "panchina"
      ],
      "propedeutico_a": [
        "pistol_squat_assistito"
      ],
      "richiede": [
        "squat"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5/gamba",
        "standard": "3x8/gamba",
        "intenso": "4x10/gamba"
      },
      "media": null,
      "descrizione": "Piede posteriore appoggiato su una panchina, piede anteriore avanzato. Scendi piegando il ginocchio anteriore fino a sfiorare terra con quello posteriore. Senti lavorare: quadricipiti e glutei del lato anteriore. Errore comune: avere il piede anteriore troppo vicino alla panchina, che porta il ginocchio oltre la punta del piede."
    },
    {
      "id": "step_up_esplosivo",
      "name": "Step-up esplosivo",
      "categoria": "gambe",
      "tipo": "esplosiva",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "polpacci"
      ],
      "difficolta": 2,
      "attrezzo": [
        "struttura",
        "panchina"
      ],
      "propedeutico_a": [
        "pistol_squat"
      ],
      "richiede": [
        "squat"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x6/gamba",
        "standard": "3x8/gamba",
        "intenso": "4x10/gamba"
      },
      "media": null,
      "descrizione": "Sali sul rialzo con una gamba sola in modo esplosivo, portando l'altra gamba in alto. Atterraggio controllato. Senti lavorare: quadricipiti e glutei con reclutamento esplosivo. Errore comune: spingere con il piede a terra invece di usare solo la gamba sul rialzo."
    },
    {
      "id": "nordic_curl",
      "name": "Nordic Curl negativa",
      "categoria": "gambe",
      "tipo": "eccentrica",
      "muscoli": [
        "femorali",
        "glutei",
        "core"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra bassa",
        "struttura"
      ],
      "propedeutico_a": [],
      "richiede": [],
      "recupero": 90,
      "skill_target": false,
      "pattern": "hinge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Ginocchia a terra con i piedi bloccati sotto una sbarra o struttura. Abbassati lentamente in avanti per 5-6 secondi mantenendo il corpo rigido, poi aiutati con le mani per risalire. Senti lavorare: femorali in eccentrica massimale. Errore comune: flettere i fianchi invece di scendere mantenendo il corpo come un'asse."
    },
    {
      "id": "glute_bridge",
      "name": "Glute Bridge",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "glutei",
        "femorali",
        "core"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "single_leg_glute_bridge",
        "nordic_curl"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "hinge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x10",
        "standard": "3x15",
        "intenso": "4x20"
      },
      "media": null,
      "descrizione": "Sdraiato con le ginocchia piegate e i piedi a terra. Spingi il bacino verso l'alto contraendo i glutei, tieni 1-2 secondi in cima. Senti lavorare: glutei e femorali. Errore comune: sollevare il bacino usando la schiena invece di spingere con i glutei."
    },
    {
      "id": "single_leg_glute_bridge",
      "name": "Single Leg Glute Bridge",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "glutei",
        "femorali",
        "core"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pistol_squat_assistito"
      ],
      "richiede": [
        "glute_bridge"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "hinge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x6/gamba",
        "standard": "3x10/gamba",
        "intenso": "4x12/gamba"
      },
      "media": null,
      "descrizione": "Come il glute bridge ma con una gamba tesa in aria. Spingi il bacino verso l'alto su una gamba sola. Senti lavorare: gluteo e femorali del lato di appoggio in modo più intenso. Errore comune: ruotare il bacino verso il lato sollevato invece di tenerlo livellato."
    },
    {
      "id": "calf_raise",
      "name": "Calf Raise",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "polpacci"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra",
        "struttura"
      ],
      "propedeutico_a": [
        "single_leg_calf_raise"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "hinge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x12",
        "standard": "3x20",
        "intenso": "4x25"
      },
      "media": null,
      "descrizione": "In piedi con i piedi a terra, solleva i talloni il più in alto possibile contraendo i polpacci, poi abbassa lentamente. Senti lavorare: gastrocnemio e soleo. Errore comune: scendere troppo velocemente senza sfruttare la fase eccentrica."
    },
    {
      "id": "single_leg_calf_raise",
      "name": "Single Leg Calf Raise",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "polpacci"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra",
        "struttura"
      ],
      "propedeutico_a": [],
      "richiede": [
        "calf_raise"
      ],
      "recupero": 45,
      "skill_target": false,
      "pattern": "hinge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x8/gamba",
        "standard": "3x15/gamba",
        "intenso": "4x20/gamba"
      },
      "media": null,
      "descrizione": "Come il calf raise ma su una gamba sola, tenendo la struttura solo per bilanciamento. Senti lavorare: gastrocnemio e soleo del lato di appoggio con doppio carico. Errore comune: usare la struttura per scaricare il peso invece di tenerla solo per l'equilibrio."
    },
    {
      "id": "advanced_tuck_front_lever",
      "name": "Advanced Tuck Front Lever",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "dorsali",
        "core",
        "spalle",
        "bicipiti"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "one_leg_front_lever"
      ],
      "richiede": [
        "tuck_front_lever"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x6s",
        "standard": "4x8s",
        "intenso": "4x10s"
      },
      "media": null,
      "descrizione": "Come il tuck front lever ma con la schiena piatta e le cosce orizzontali invece di raccolte al petto. Senti lavorare: dorsali e core con intensità maggiore. Errore comune: non mantenere la schiena piatta cedendo con le anche verso il basso."
    },
    {
      "id": "full_planche",
      "name": "Full Planche",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "core",
        "tricipiti",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "terra",
        "parallele basse"
      ],
      "propedeutico_a": [],
      "richiede": [
        "straddle_planche"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x3s",
        "standard": "4x4s",
        "intenso": "4x5s"
      },
      "media": null,
      "descrizione": "Corpo completamente parallelo al suolo, braccia tese, gambe unite e scapole in massima protrazione. Senti lavorare: deltoide anteriore, core e avambracci in modo totale. Errore comune: lasciare che le anche cedano verso il basso rompendo la linea orizzontale."
    },
    {
      "id": "full_back_lever",
      "name": "Full Back Lever",
      "categoria": "tirata",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "petto",
        "bicipiti",
        "core"
      ],
      "difficolta": 5,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "straddle_back_lever"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "horizontal_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x3s",
        "standard": "3x4s",
        "intenso": "4x5s"
      },
      "media": null,
      "descrizione": "Corpo completamente parallelo al suolo sotto la sbarra, gambe unite, braccia tese e corpo rigido. Senti lavorare: spalle in estensione massima, petto e bicipiti. Errore comune: lasciare che i piedi scendano verso il suolo rompendo il parallelo."
    },
    {
      "id": "human_flag",
      "name": "Human Flag",
      "categoria": "mix",
      "tipo": "isometrica",
      "muscoli": [
        "obliqui",
        "core",
        "spalle",
        "dorsali",
        "bicipiti",
        "tricipiti"
      ],
      "difficolta": 5,
      "attrezzo": [
        "palo verticale",
        "struttura"
      ],
      "propedeutico_a": [],
      "richiede": [
        "human_flag_tuck"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "mix",
      "fase": "skill",
      "sets": {
        "leggero": "3x2s/lato",
        "standard": "3x3s/lato",
        "intenso": "4x5s/lato"
      },
      "media": null,
      "descrizione": "Come il tuck human flag ma con il corpo completamente teso e orizzontale. Senti lavorare: obliqui, dorsali e spalle in modo massimale. Errore comune: lasciare che i fianchi cedano verso il basso rompendo l'orizzontale."
    },
    {
      "id": "handstand_push_up_free",
      "name": "Freestanding Handstand Push-up",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "tricipiti",
        "core",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "handstand_hold",
        "handstand_push_up_wall"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "vertical_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x2",
        "standard": "3x3",
        "intenso": "4x4"
      },
      "media": null,
      "descrizione": "Verticale libera, scendi piegando i gomiti verso il suolo e risali mantenendo l'equilibrio durante tutto il movimento. Senti lavorare: deltoidi, tricipiti e core stabilizzatore. Errore comune: perdere l'allineamento durante la fase di spinta."
    },
    {
      "id": "explosive_pull_up",
      "name": "Explosive Pull-up",
      "categoria": "tirata",
      "tipo": "esplosiva",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "spalle",
        "core",
        "avambracci"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "muscle_up"
      ],
      "richiede": [
        "pull_up"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "4x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Pull-up eseguito con massima accelerazione nella fase di tiro. L'obiettivo è portare il petto alla sbarra con una forza tale da staccare le mani. Senti lavorare: dorsali e bicipiti con reclutamento esplosivo. Errore comune: usare lo slancio delle gambe invece della forza della schiena."
    },
    {
      "id": "assisted_one_arm_pull_up",
      "name": "Assisted One Arm Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "core",
        "spalle",
        "avambracci"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra",
        "elastico"
      ],
      "propedeutico_a": [
        "negative_one_arm_pull_up"
      ],
      "richiede": [
        "archer_pull_up"
      ],
      "recupero": 150,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x2/lato",
        "standard": "3x3/lato",
        "intenso": "4x4/lato"
      },
      "media": null,
      "descrizione": "Trazione su un braccio con l'altro che assiste tenendo il polso o con un elastico. Tira fino a mento sopra la sbarra. Senti lavorare: dorsale e bicipite del lato attivo in modo quasi totale. Errore comune: dare troppa assistenza con il secondo braccio, non allenando il lato principale."
    },
    {
      "id": "negative_one_arm_pull_up",
      "name": "Negative One Arm Pull-up",
      "categoria": "tirata",
      "tipo": "eccentrica",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "core",
        "spalle",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "one_arm_pull_up"
      ],
      "richiede": [
        "assisted_one_arm_pull_up"
      ],
      "recupero": 180,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "skill",
      "sets": {
        "leggero": "3x2/lato",
        "standard": "3x3/lato",
        "intenso": "3x3/lato"
      },
      "media": null,
      "descrizione": "Sali alla posizione alta su un braccio usando entrambe le mani, poi togli una mano e abbassati lentamente in 5-6 secondi. Senti lavorare: dorsale e bicipite in eccentrica massimale. Errore comune: perdere il controllo del busto che ruota durante la discesa."
    },
    {
      "id": "planche_push_up",
      "name": "Planche Push-up",
      "categoria": "spinta",
      "tipo": "mix",
      "muscoli": [
        "spalle",
        "petto",
        "core",
        "tricipiti",
        "avambracci"
      ],
      "difficolta": 5,
      "attrezzo": [
        "terra",
        "parallele basse"
      ],
      "propedeutico_a": [],
      "richiede": [
        "pseudo_planche_push_up",
        "straddle_planche"
      ],
      "recupero": 180,
      "skill_target": true,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x2",
        "standard": "3x3",
        "intenso": "4x4"
      },
      "media": null,
      "descrizione": "In posizione di planche completa, esegui la flessione delle braccia mantenendo il corpo parallelo al suolo per tutto il movimento. Senti lavorare: deltoide anteriore, petto e core simultaneamente. Errore comune: lasciare scendere le anche durante la fase di discesa."
    },
    {
      "id": "push_up_ginocchia",
      "name": "Push-up sulle ginocchia",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "push_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x8",
        "standard": "3x12",
        "intenso": "4x15"
      },
      "media": null,
      "descrizione": "Come il push-up standard ma con le ginocchia a terra come appoggio. Corpo rigido dalla testa alle ginocchia. Senti lavorare: petto, tricipiti e spalle con carico ridotto. Errore comune: lasciare i fianchi cedere verso il basso."
    },
    {
      "id": "push_up_inclinato",
      "name": "Push-up inclinato (mani rialzate)",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle"
      ],
      "difficolta": 1,
      "attrezzo": [
        "struttura",
        "panchina"
      ],
      "propedeutico_a": [
        "push_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x8",
        "standard": "3x12",
        "intenso": "4x15"
      },
      "media": null,
      "descrizione": "Mani appoggiate su una panchina o struttura rialzata, corpo rigido inclinato. Scendi portando il petto verso la superficie, poi spingi. Senti lavorare: petto inferiore, tricipiti e spalle. Errore comune: non mantenere il corpo rigido dalla testa ai piedi."
    },
    {
      "id": "pike_push_up_ginocchia",
      "name": "Pike Push-up sulle ginocchia",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "tricipiti"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pike_push_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x6",
        "standard": "3x8",
        "intenso": "3x10"
      },
      "media": null,
      "descrizione": "Posizione a V rovesciata con le ginocchia a terra per ridurre il carico. Abbassa la testa tra le mani piegando i gomiti, poi spingi. Senti lavorare: deltoide anteriore e tricipiti. Errore comune: non alzare abbastanza le anche, rendendo il movimento simile a un push-up normale."
    },
    {
      "id": "pike_push_up_parallele",
      "name": "Pike Push-up su parallele basse",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "tricipiti",
        "core"
      ],
      "difficolta": 3,
      "attrezzo": [
        "parallele basse"
      ],
      "propedeutico_a": [
        "pike_push_up_elevato",
        "handstand_push_up_wall"
      ],
      "richiede": [
        "pike_push_up"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Come il pike push-up ma con le mani sulle parallele basse, che permettono un range di movimento maggiore. Senti lavorare: deltoidi e tricipiti con più profondità. Errore comune: non sfruttare il range extra, fermandosi allo stesso punto del pike su terra."
    },
    {
      "id": "dips_assistiti",
      "name": "Dips assistiti su sbarra bassa",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "tricipiti",
        "petto",
        "spalle"
      ],
      "difficolta": 1,
      "attrezzo": [
        "sbarra bassa"
      ],
      "propedeutico_a": [
        "dips"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x8",
        "standard": "3x10",
        "intenso": "4x12"
      },
      "media": null,
      "descrizione": "Mani sulla sbarra bassa dietro di te, piedi a terra davanti come appoggio parziale. Scendi piegando i gomiti, poi spingi su. Senti lavorare: tricipiti, petto e spalle con carico ridotto dai piedi. Errore comune: usare troppo la spinta dei piedi annullando il lavoro delle braccia."
    },
    {
      "id": "hindu_push_up",
      "name": "Hindu Push-up",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "spalle",
        "petto",
        "tricipiti",
        "core",
        "lombari"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pike_push_up_elevato"
      ],
      "richiede": [
        "push_up",
        "pike_push_up"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x6",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Inizia in posizione a V, scendi con un arco fluido passando rasente al suolo e risali estendendo la schiena in cobra, poi torna a V. Movimento continuo senza pause. Senti lavorare: spalle, petto, lombari e core. Errore comune: spezzare il movimento invece di mantenerlo fluido e ondulatorio."
    },
    {
      "id": "australian_row_ginocchia",
      "name": "Australian Row con ginocchia piegate",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "spalle"
      ],
      "difficolta": 1,
      "attrezzo": [
        "sbarra bassa"
      ],
      "propedeutico_a": [
        "australian_row"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x8",
        "standard": "3x10",
        "intenso": "3x12"
      },
      "media": null,
      "descrizione": "Come l'australian row ma con le ginocchia piegate a 90° e i piedi a terra per ridurre il carico. Tira il petto verso la sbarra. Senti lavorare: dorsali, bicipiti e romboidi con carico ridotto. Errore comune: usare le gambe per spingere invece di tirare con le braccia."
    },
    {
      "id": "scapular_row",
      "name": "Scapular Row",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "spalle",
        "avambracci"
      ],
      "difficolta": 1,
      "attrezzo": [
        "sbarra bassa"
      ],
      "propedeutico_a": [
        "australian_row",
        "scapular_pull_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x8",
        "standard": "3x12",
        "intenso": "3x15"
      },
      "media": null,
      "descrizione": "Appeso sotto la sbarra bassa con braccia tese, muovi solo le scapole avvicinandole senza piegare i gomiti. Senti lavorare: romboidi e trapezio medio in isolamento. Errore comune: piegare i gomiti trasformandolo in un australian row parziale."
    },
    {
      "id": "negative_pull_up",
      "name": "Negative Pull-up",
      "categoria": "tirata",
      "tipo": "eccentrica",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "spalle",
        "avambracci"
      ],
      "difficolta": 2,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "pull_up"
      ],
      "richiede": [
        "dead_hang",
        "scapular_pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "3x5",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Sali alla posizione alta con il mento sopra la sbarra usando un salto, poi abbassati in 5-8 secondi fino al dead hang completo. Senti lavorare: dorsali e bicipiti nella fase eccentrica. Errore comune: scendere troppo velocemente invece di resistere attivamente."
    },
    {
      "id": "wide_pull_up",
      "name": "Wide Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "spalle",
        "avambracci"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "archer_pull_up"
      ],
      "richiede": [
        "pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x4",
        "standard": "3x6",
        "intenso": "4x8"
      },
      "media": null,
      "descrizione": "Pull-up con presa molto più larga delle spalle. Tira fino a portare il mento sopra la sbarra. Senti lavorare: gran dorsale con enfasi esterna, riducendo il contributo dei bicipiti. Errore comune: portare il petto alla sbarra invece del mento, che altera il pattern di movimento."
    },
    {
      "id": "close_grip_pull_up",
      "name": "Close Grip Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "bicipiti",
        "dorsali",
        "avambracci"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "archer_pull_up",
        "one_arm_pull_up"
      ],
      "richiede": [
        "pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x4",
        "standard": "3x6",
        "intenso": "4x8"
      },
      "media": null,
      "descrizione": "Pull-up con le mani vicine al centro della sbarra. Tira fino a portare il mento sopra, gomiti che scorrono vicini al busto. Senti lavorare: bicipiti e brachiale più del pull-up largo. Errore comune: aprire i gomiti lateralmente."
    },
    {
      "id": "l_sit_pull_up",
      "name": "L-sit Pull-up",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "core",
        "flessori anca",
        "avambracci"
      ],
      "difficolta": 4,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "one_arm_pull_up"
      ],
      "richiede": [
        "pull_up",
        "l_sit"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "3x4",
        "intenso": "4x5"
      },
      "media": null,
      "descrizione": "Pull-up eseguito mantenendo le gambe tese a 90° rispetto al busto per tutta la durata. Senti lavorare: dorsali, bicipiti e core anteriore simultaneamente. Errore comune: abbassare le gambe nella fase difficile della trazione invece di mantenerle a 90°."
    },
    {
      "id": "wall_sit",
      "name": "Wall Sit",
      "categoria": "gambe",
      "tipo": "isometrica",
      "muscoli": [
        "quadricipiti",
        "glutei"
      ],
      "difficolta": 1,
      "attrezzo": [
        "muro"
      ],
      "propedeutico_a": [
        "squat",
        "pistol_squat_assistito"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x20s",
        "standard": "3x35s",
        "intenso": "3x45s"
      },
      "media": null,
      "descrizione": "Schiena contro il muro, ginocchia a 90°, cosce parallele al suolo. Tieni la posizione senza il supporto delle mani. Senti lavorare: quadricipiti e glutei in isometrica. Errore comune: posizionare i piedi troppo vicini al muro, che porta le ginocchia oltre le punte."
    },
    {
      "id": "affondo_statico",
      "name": "Affondo statico",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "femorali"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "affondo_progressione",
        "bulgarian_split_squat"
      ],
      "richiede": [
        "squat"
      ],
      "recupero": 45,
      "skill_target": false,
      "pattern": "lunge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5/gamba",
        "standard": "3x8/gamba",
        "intenso": "4x10/gamba"
      },
      "media": null,
      "descrizione": "Un piede avanti, un piede indietro. Scendi piegando entrambe le ginocchia fino a sfiorare terra con quella posteriore, poi risali senza cambiare posizione dei piedi. Senti lavorare: quadricipiti e glutei. Errore comune: lasciare che il busto si inclini in avanti invece di rimanere eretto."
    },
    {
      "id": "affondo_progressione",
      "name": "Affondo in progressione",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "femorali",
        "polpacci"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "affondo_laterale",
        "affondo_torsione",
        "pistol_squat_assistito"
      ],
      "richiede": [
        "affondo_statico"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "lunge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x6/gamba",
        "standard": "3x10/gamba",
        "intenso": "4x12/gamba"
      },
      "media": null,
      "descrizione": "Affondi alternati avanzando nello spazio con ritmo continuo, busto sempre eretto. Senti lavorare: quadricipiti, glutei e coordinazione dinamica. Errore comune: fare passi troppo corti che non portano il ginocchio posteriore abbastanza vicino al suolo."
    },
    {
      "id": "affondo_laterale",
      "name": "Affondo laterale",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "adduttori",
        "femorali"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pistol_squat_assistito"
      ],
      "richiede": [
        "squat"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "lunge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5/lato",
        "standard": "3x8/lato",
        "intenso": "4x10/lato"
      },
      "media": null,
      "descrizione": "Passo laterale ampio, piega il ginocchio della gamba che porta il peso con la coscia parallela al suolo. L'altra gamba rimane tesa. Senti lavorare: quadricipiti, glutei e adduttori. Errore comune: non aprire abbastanza il passo, riducendo il range di movimento."
    },
    {
      "id": "affondo_torsione",
      "name": "Affondo con torsione",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "obliqui",
        "core"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "affondo_statico"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "lunge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5/gamba",
        "standard": "3x8/gamba",
        "intenso": "4x10/gamba"
      },
      "media": null,
      "descrizione": "Affondo normale, in basso ruota il busto verso la gamba anteriore aprendo le braccia. Senti lavorare: quadricipiti, glutei e obliqui in catena diagonale. Errore comune: ruotare prima di arrivare in fondo all'affondo invece di farlo nella posizione bassa."
    },
    {
      "id": "box_step_up",
      "name": "Box Step-up",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "femorali"
      ],
      "difficolta": 1,
      "attrezzo": [
        "struttura",
        "panchina"
      ],
      "propedeutico_a": [
        "step_up_esplosivo",
        "pistol_squat_assistito"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "squat",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5/gamba",
        "standard": "3x8/gamba",
        "intenso": "4x10/gamba"
      },
      "media": null,
      "descrizione": "Sali sul rialzo con una gamba sola lentamente e in modo controllato, porta l'altra su, poi scendi. Senti lavorare: quadricipiti e glutei con controllo. Errore comune: spingere con il piede a terra invece di usare solo la gamba sul rialzo."
    },
    {
      "id": "affondo_bulgaro_salto",
      "name": "Affondo bulgaro con salto",
      "categoria": "gambe",
      "tipo": "esplosiva",
      "muscoli": [
        "quadricipiti",
        "glutei",
        "polpacci"
      ],
      "difficolta": 4,
      "attrezzo": [
        "struttura",
        "panchina"
      ],
      "propedeutico_a": [
        "pistol_squat"
      ],
      "richiede": [
        "bulgarian_split_squat"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "lunge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3/gamba",
        "standard": "3x5/gamba",
        "intenso": "4x6/gamba"
      },
      "media": null,
      "descrizione": "Bulgarian split squat con salto esplosivo in cima. Atterraggio morbido sulla stessa posizione. Senti lavorare: quadricipiti e glutei con reclutamento esplosivo massimale. Errore comune: non ammortizzare l'atterraggio con le ginocchia."
    },
    {
      "id": "hip_thrust_panchina",
      "name": "Hip Thrust su panchina",
      "categoria": "gambe",
      "tipo": "forza",
      "muscoli": [
        "glutei",
        "femorali",
        "core"
      ],
      "difficolta": 2,
      "attrezzo": [
        "panchina"
      ],
      "propedeutico_a": [
        "single_leg_glute_bridge",
        "nordic_curl"
      ],
      "richiede": [
        "glute_bridge"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "hinge",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x8",
        "standard": "3x12",
        "intenso": "4x15"
      },
      "media": null,
      "descrizione": "Spalle appoggiate sulla panchina, piedi a terra, bacino in basso. Spingi il bacino verso l'alto contraendo i glutei fino a portare busto e cosce orizzontali, poi abbassa. Senti lavorare: glutei con range di movimento maggiore del glute bridge da terra. Errore comune: inarcare eccessivamente la schiena in cima."
    },
    {
      "id": "inchworm",
      "name": "Inchworm",
      "categoria": "mix",
      "tipo": "mix",
      "muscoli": [
        "spalle",
        "core",
        "femorali",
        "petto",
        "tricipiti"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "bear_crawl",
        "burpee"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x5",
        "standard": "3x8",
        "intenso": "3x10"
      },
      "media": null,
      "descrizione": "Da in piedi, scendi mettendo le mani a terra e cammina in avanti con le mani fino alla posizione di plank, poi torna verso i piedi. Senti lavorare: spalle, core e catena posteriore in modo mobile. Errore comune: non estendere completamente il corpo in posizione plank."
    },
    {
      "id": "bear_crawl",
      "name": "Bear Crawl",
      "categoria": "mix",
      "tipo": "mix",
      "muscoli": [
        "spalle",
        "core",
        "quadricipiti",
        "tricipiti"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "mountain_climber"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "2x15m",
        "standard": "3x20m",
        "intenso": "4x20m"
      },
      "media": null,
      "descrizione": "A quattro appoggi con le ginocchia sollevate di 5 cm. Avanza alternando mano e piede opposti mantenendo le ginocchia basse. Senti lavorare: spalle, core e coordinazione. Errore comune: alzare troppo i fianchi invece di tenerli allo stesso livello delle spalle."
    },
    {
      "id": "mountain_climber",
      "name": "Mountain Climber",
      "categoria": "mix",
      "tipo": "mix",
      "muscoli": [
        "core",
        "spalle",
        "quadricipiti",
        "flessori anca"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "spiderman_push_up",
        "burpee"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x10/lato",
        "standard": "3x15/lato",
        "intenso": "4x20/lato"
      },
      "media": null,
      "descrizione": "Da posizione di plank alto, porta le ginocchia alternativamente verso il petto in modo esplosivo. Senti lavorare: core, spalle e flessori dell'anca. Errore comune: sollevare i fianchi durante il movimento invece di mantenerli stabili."
    },
    {
      "id": "spiderman_push_up",
      "name": "Spiderman Push-up",
      "categoria": "mix",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "obliqui",
        "core",
        "flessori anca"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "push_up",
        "mountain_climber"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3/lato",
        "standard": "3x5/lato",
        "intenso": "4x6/lato"
      },
      "media": null,
      "descrizione": "Durante la discesa del push-up porta il ginocchio verso il gomito dello stesso lato. Alterna ad ogni ripetizione. Senti lavorare: petto, tricipiti e obliqui in combinazione. Errore comune: portare il ginocchio prima di iniziare la discesa invece di farlo durante."
    },
    {
      "id": "burpee",
      "name": "Burpee",
      "categoria": "mix",
      "tipo": "esplosiva",
      "muscoli": [
        "petto",
        "tricipiti",
        "quadricipiti",
        "glutei",
        "core",
        "spalle"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "sprawl"
      ],
      "richiede": [
        "push_up",
        "squat"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Da in piedi, accovacciati con le mani a terra, salta i piedi in posizione plank, esegui un push-up, salta in squat e salta verticalmente con le braccia in alto. Senti lavorare: tutto il corpo in sequenza. Errore comune: non fare il push-up completo nella fase plank."
    },
    {
      "id": "sprawl",
      "name": "Sprawl",
      "categoria": "mix",
      "tipo": "esplosiva",
      "muscoli": [
        "petto",
        "tricipiti",
        "quadricipiti",
        "core",
        "spalle"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "burpee"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x5",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Da in piedi, butta le mani a terra e i piedi indietro in posizione plank molto velocemente, poi risali con altrettanta velocità. Senti lavorare: petto, tricipiti e quadricipiti con velocità esplosiva. Errore comune: rallentare nella fase di ritorno dai piedi al suolo."
    },
    {
      "id": "pull_up_knee_raise",
      "name": "Pull-up + Knee Raise",
      "categoria": "mix",
      "tipo": "forza",
      "muscoli": [
        "dorsali",
        "bicipiti",
        "core",
        "flessori anca",
        "avambracci"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "l_sit_pull_up"
      ],
      "richiede": [
        "pull_up",
        "hanging_leg_raise"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x4",
        "standard": "3x6",
        "intenso": "4x8"
      },
      "media": null,
      "descrizione": "Esegui un pull-up completo, in cima porta le ginocchia al petto mantenendo il mento sopra la sbarra, poi abbassa tutto insieme. Senti lavorare: dorsali, bicipiti e flessori dell'anca combinati. Errore comune: abbassare il corpo prima di portare le ginocchia."
    },
    {
      "id": "dips_l_sit",
      "name": "Dips + L-sit",
      "categoria": "mix",
      "tipo": "forza",
      "muscoli": [
        "tricipiti",
        "petto",
        "core",
        "flessori anca",
        "quadricipiti"
      ],
      "difficolta": 4,
      "attrezzo": [
        "parallele alte"
      ],
      "propedeutico_a": [],
      "richiede": [
        "dips",
        "l_sit"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "mix",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x3",
        "standard": "3x4",
        "intenso": "4x5"
      },
      "media": null,
      "descrizione": "Dips eseguiti mantenendo le gambe tese in posizione L durante tutto il movimento. Senti lavorare: tricipiti, petto e core anteriore in modo simultaneo. Errore comune: abbassare le gambe nella fase più difficile dei dips per compensare."
    },
    {
      "id": "dips_one_arm_assistiti",
      "name": "Dips a una mano assistiti",
      "categoria": "mix",
      "tipo": "forza",
      "muscoli": [
        "tricipiti",
        "petto",
        "spalle",
        "core"
      ],
      "difficolta": 4,
      "attrezzo": [
        "parallele alte"
      ],
      "propedeutico_a": [],
      "richiede": [
        "dips",
        "russian_dips"
      ],
      "recupero": 120,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x2/lato",
        "standard": "3x3/lato",
        "intenso": "4x4/lato"
      },
      "media": null,
      "descrizione": "Dips su un braccio solo con l'altro che assiste minimamente la posizione. Senti lavorare: tricipiti, petto e core del lato attivo. Errore comune: usare troppa assistenza con il secondo braccio annullando il lavoro unilaterale."
    },
    {
      "id": "tuck_hold_parallele",
      "name": "Tuck Hold su parallele",
      "categoria": "spinta",
      "tipo": "isometrica",
      "muscoli": [
        "spalle",
        "tricipiti",
        "core"
      ],
      "difficolta": 1,
      "attrezzo": [
        "parallele alte"
      ],
      "propedeutico_a": [
        "support_hold",
        "tuck_planche"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "isometric_push",
      "fase": "skill",
      "sets": {
        "leggero": "3x10s",
        "standard": "3x15s",
        "intenso": "4x20s"
      },
      "media": null,
      "descrizione": "Sulle parallele a braccia tese, solleva le gambe raccolte al petto e tieni. Senti lavorare: tricipiti, spalle e flessori dell'anca. Errore comune: lasciare che le spalle salgano verso le orecchie invece di tenerle depresse."
    },
    {
      "id": "knee_raise_terra",
      "name": "Knee Raise da terra",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "core",
        "flessori anca",
        "quadricipiti"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pike_hold",
        "hollow_body"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x8",
        "standard": "3x12",
        "intenso": "3x15"
      },
      "media": null,
      "descrizione": "Sdraiato con le braccia lungo i fianchi. Porta le ginocchia verso il petto lentamente e abbassa senza toccare terra. Senti lavorare: core anteriore e flessori dell'anca. Errore comune: usare l'inerzia abbassando le gambe di colpo invece di resistere."
    },
    {
      "id": "dead_bug_semplificato",
      "name": "Dead Bug semplificato",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "lombari"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "dead_bug",
        "hollow_body"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x5/lato",
        "standard": "3x8/lato",
        "intenso": "3x10/lato"
      },
      "media": null,
      "descrizione": "Sdraiato, braccia tese verso il soffitto e ginocchia piegate a 90°. Estendi un braccio sopra la testa e la gamba opposta verso il suolo senza toccare, lombare sempre incollata. Senti lavorare: core profondo e stabilizzatori lombari. Errore comune: lasciare che la schiena si sollevi durante l'estensione."
    },
    {
      "id": "plank",
      "name": "Plank base",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "spalle",
        "glutei"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "hollow_body",
        "side_plank",
        "push_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x20s",
        "standard": "3x35s",
        "intenso": "3x45s"
      },
      "media": null,
      "descrizione": "Appoggio su avambracci e punte dei piedi, corpo rigido dalla testa ai piedi. Senti lavorare: core, spalle e glutei come stabilizzatori. Errore comune: sollevare i fianchi verso l'alto o lasciarli cedere verso il basso."
    },
    {
      "id": "hollow_body_rocks",
      "name": "Hollow Body Rocks",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "core",
        "glutei",
        "quadricipiti",
        "spalle"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "l_sit",
        "tuck_planche",
        "handstand_hold"
      ],
      "richiede": [
        "hollow_body"
      ],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x8",
        "standard": "3x12",
        "intenso": "3x15"
      },
      "media": null,
      "descrizione": "In posizione hollow body, dondola il corpo in avanti e indietro mantenendo la tensione del core senza perdere la forma. Senti lavorare: core anteriore completo con intensità dinamica. Errore comune: perdere la lombare incollata al suolo durante il dondolio."
    },
    {
      "id": "spiderman_plank",
      "name": "Spiderman Plank",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "obliqui",
        "core",
        "spalle",
        "flessori anca"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "copenhagen_plank"
      ],
      "richiede": [
        "plank"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x5/lato",
        "standard": "3x8/lato",
        "intenso": "3x10/lato"
      },
      "media": null,
      "descrizione": "Da posizione di plank alto, porta lentamente il ginocchio verso il gomito dello stesso lato strisciando rasente al suolo. Alterna i lati. Senti lavorare: obliqui e flessori dell'anca. Errore comune: sollevare i fianchi lateralmente invece di mantenerli stabili."
    },
    {
      "id": "plank_to_down_dog",
      "name": "Plank to Down Dog",
      "categoria": "core",
      "tipo": "mix",
      "muscoli": [
        "spalle",
        "core",
        "femorali",
        "polpacci"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "pike_push_up",
        "hollow_body"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x6",
        "standard": "3x10",
        "intenso": "3x12"
      },
      "media": null,
      "descrizione": "Da plank alto, spingi le anche verso l'alto portandoti in cane a testa in giù, poi torna a plank. Senti lavorare: spalle, core e catena posteriore in alternanza. Errore comune: piegare le ginocchia in down dog invece di tendere i talloni verso il suolo."
    },
    {
      "id": "dead_bug",
      "name": "Dead Bug",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "lombari"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "hollow_body",
        "l_sit"
      ],
      "richiede": [
        "dead_bug_semplificato"
      ],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "2x4/lato",
        "standard": "3x6/lato",
        "intenso": "3x8/lato"
      },
      "media": null,
      "descrizione": "Sdraiato, braccia tese verso il soffitto, gambe tese a 90°. Estendi un braccio sopra la testa e la gamba opposta verso il suolo tenendo la lombare incollata. Senti lavorare: core profondo e stabilizzatori con intensità maggiore della versione semplificata. Errore comune: abbassare contemporaneamente braccio e gamba dello stesso lato."
    },
    {
      "id": "tuck_l_sit",
      "name": "Tuck L-sit",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "spalle",
        "tricipiti",
        "flessori anca"
      ],
      "difficolta": 2,
      "attrezzo": [
        "parallele basse",
        "terra"
      ],
      "propedeutico_a": [
        "l_sit"
      ],
      "richiede": [
        "support_hold",
        "pike_hold"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x8s",
        "standard": "3x12s",
        "intenso": "4x15s"
      },
      "media": null,
      "descrizione": "Appoggiato sulle mani o parallele basse a braccia tese, solleva il corpo con le ginocchia raccolte al petto. Senti lavorare: core, tricipiti e flessori dell'anca. Errore comune: lasciare le spalle salire verso le orecchie invece di tenerle depresse."
    },
    {
      "id": "straddle_l_sit",
      "name": "Straddle L-sit",
      "categoria": "core",
      "tipo": "isometrica",
      "muscoli": [
        "core",
        "spalle",
        "tricipiti",
        "flessori anca",
        "adduttori"
      ],
      "difficolta": 3,
      "attrezzo": [
        "parallele basse",
        "terra"
      ],
      "propedeutico_a": [
        "v_sit"
      ],
      "richiede": [
        "l_sit"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x6s",
        "standard": "3x10s",
        "intenso": "4x12s"
      },
      "media": null,
      "descrizione": "L-sit con le gambe aperte lateralmente e tese, corpo sollevato sulle mani. Senti lavorare: core, adduttori e tricipiti con la riduzione del momento torcente rispetto al full L-sit. Errore comune: chiudere le gambe per compensare la fatica."
    },
    {
      "id": "straddle_l_sit_v_sit",
      "name": "Straddle L-sit to V-sit",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "core",
        "flessori anca",
        "spalle",
        "tricipiti"
      ],
      "difficolta": 4,
      "attrezzo": [
        "parallele basse",
        "terra"
      ],
      "propedeutico_a": [
        "v_sit"
      ],
      "richiede": [
        "straddle_l_sit",
        "l_sit"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x3",
        "standard": "3x4",
        "intenso": "4x5"
      },
      "media": null,
      "descrizione": "Da straddle L-sit, comprimi le gambe verso il busto portandolo in V-sit mantenendo le braccia tese. Senti lavorare: flessori dell'anca e core con compressione dinamica. Errore comune: piegare le ginocchia durante la transizione."
    },
    {
      "id": "ab_wheel_rollout",
      "name": "Ab Wheel Rollout",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "core",
        "lombari",
        "spalle",
        "dorsali"
      ],
      "difficolta": 3,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "dragon_flag_tuck"
      ],
      "richiede": [
        "hollow_body",
        "plank"
      ],
      "recupero": 75,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x4",
        "standard": "3x6",
        "intenso": "4x8"
      },
      "media": null,
      "descrizione": "In ginocchio, appoggia i pugni a terra. Rotola in avanti estendendo il corpo il più possibile, poi torna su contraendo il core. Senti lavorare: core anteriore profondo, lombari e spalle. Errore comune: cedere con la schiena nella fase di estensione invece di mantenere il corpo rigido."
    },
    {
      "id": "dragon_flag_negativa",
      "name": "Dragon Flag Negativa",
      "categoria": "core",
      "tipo": "eccentrica",
      "muscoli": [
        "core",
        "lombari",
        "spalle",
        "quadricipiti",
        "glutei"
      ],
      "difficolta": 3,
      "attrezzo": [
        "panchina",
        "struttura"
      ],
      "propedeutico_a": [
        "dragon_flag"
      ],
      "richiede": [
        "dragon_flag_tuck",
        "hollow_body"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x3",
        "standard": "3x4",
        "intenso": "4x5"
      },
      "media": null,
      "descrizione": "Sali alla posizione verticale sulla panchina tenendo la struttura, poi abbassati lentamente in 5-6 secondi mantenendo il corpo rigido. Senti lavorare: core completo in eccentrica massimale. Errore comune: flettere i fianchi durante la discesa."
    },
    {
      "id": "candlestick",
      "name": "Candlestick",
      "categoria": "core",
      "tipo": "mix",
      "muscoli": [
        "core",
        "glutei",
        "lombari",
        "spalle"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "dragon_flag_tuck",
        "hollow_body"
      ],
      "richiede": [
        "hollow_body"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x6",
        "standard": "3x8",
        "intenso": "4x10"
      },
      "media": null,
      "descrizione": "Sdraiato, porta le gambe verticali verso il soffitto sollevando anche i fianchi, tieni 2 secondi poi abbassa controllato. Senti lavorare: core, glutei e lombari. Errore comune: usare lo slancio per portare le gambe su invece di partire con un'azione muscolare controllata."
    },
    {
      "id": "skin_the_cat",
      "name": "Skin the Cat",
      "categoria": "core",
      "tipo": "mix",
      "muscoli": [
        "spalle",
        "dorsali",
        "core",
        "petto"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [
        "tuck_back_lever",
        "tuck_front_lever"
      ],
      "richiede": [
        "dead_hang",
        "hanging_leg_raise"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x3",
        "standard": "3x4",
        "intenso": "4x5"
      },
      "media": null,
      "descrizione": "Da dead hang, porta le gambe su e oltre la sbarra ruotando il corpo completo fino al back lever, poi torna al contrario. Movimento lento e controllato. Senti lavorare: spalle, dorsali e core nella mobilità completa. Errore comune: usare lo slancio invece di controllare tutta la rotazione."
    },
    {
      "id": "push_up_t",
      "name": "T Push-up (con rotazione)",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto",
        "tricipiti",
        "spalle",
        "obliqui",
        "stabilizzatori scapolari"
      ],
      "difficolta": 2,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "archer_push_up"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x6/lato",
        "standard": "3x8/lato",
        "intenso": "4x10/lato"
      },
      "media": null,
      "descrizione": "Esegui un push-up standard, poi in cima ruota il corpo aprendo un braccio verso il cielo con gambe e busto che formano una T. Alterna lato ad ogni ripetizione. Senti lavorare: petto, tricipiti e obliqui. Errore comune: ruotare prima di completare la spinta."
    },
    {
      "id": "decline_push_up",
      "name": "Decline Push-up (piedi rialzati)",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "petto alto",
        "spalle",
        "tricipiti"
      ],
      "difficolta": 2,
      "attrezzo": [
        "panchina",
        "struttura"
      ],
      "propedeutico_a": [
        "pike_push_up_elevato"
      ],
      "richiede": [
        "push_up"
      ],
      "recupero": 60,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x8",
        "standard": "3x12",
        "intenso": "4x15"
      },
      "media": null,
      "descrizione": "Mani a terra, piedi su una panchina. Il corpo è inclinato con la testa in basso. Scendi portando il petto verso il suolo, poi spingi. Senti lavorare: petto alto e deltoide anteriore. Errore comune: lasciare che i fianchi scendano rompendo la rigidità del corpo."
    },
    {
      "id": "rear_pull_up",
      "name": "Rear Pull-up (nuca alla sbarra)",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "trapezio medio",
        "romboidi",
        "gran dorsale",
        "bicipiti"
      ],
      "difficolta": 3,
      "attrezzo": [
        "sbarra"
      ],
      "propedeutico_a": [],
      "richiede": [
        "pull_up"
      ],
      "recupero": 90,
      "skill_target": false,
      "pattern": "vertical_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x4",
        "standard": "3x6",
        "intenso": "4x6"
      },
      "media": null,
      "descrizione": "Come il pull-up normale ma invece di portare il petto verso la sbarra, abbassa la testa in avanti e porta la nuca verso di essa. Senti lavorare: trapezio medio e romboidi con retrazione scapolare profonda. Errore comune: forzare la cervicale invece di inclinarsi naturalmente."
    },
    {
      "id": "face_pull_elastico",
      "name": "Face Pull con elastico",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "trapezio medio",
        "romboidi",
        "rotatori esterni spalla",
        "deltoide posteriore"
      ],
      "difficolta": 1,
      "attrezzo": [
        "elastico",
        "sbarra"
      ],
      "propedeutico_a": [
        "rear_pull_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x12",
        "standard": "3x15",
        "intenso": "4x20"
      },
      "media": null,
      "descrizione": "Elastico ancorato alla sbarra all'altezza del viso. Tieni le estremità con i gomiti alti e aperti, tira verso il viso finendo con le mani vicino alle orecchie. Senti lavorare: trapezio medio, romboidi e rotatori esterni della spalla. Errore comune: abbassare i gomiti durante il movimento."
    },
    {
      "id": "band_pull_apart",
      "name": "Band Pull-Apart",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "trapezio medio",
        "romboidi",
        "rotatori esterni spalla",
        "deltoide posteriore"
      ],
      "difficolta": 1,
      "attrezzo": [
        "elastico"
      ],
      "propedeutico_a": [
        "face_pull_elastico"
      ],
      "richiede": [],
      "recupero": 30,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x15",
        "standard": "3x20",
        "intenso": "4x25"
      },
      "media": null,
      "descrizione": "In piedi con l'elastico teso davanti a te all'altezza del petto e braccia tese. Apri le braccia lateralmente retraendo le scapole finché l'elastico tocca il petto, poi torna lentamente. Senti lavorare: trapezio medio, romboidi e deltoide posteriore. Errore comune: piegare i gomiti durante il movimento."
    },
    {
      "id": "row_elastico",
      "name": "Row con elastico",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "gran dorsale",
        "romboidi",
        "trapezio",
        "bicipiti"
      ],
      "difficolta": 2,
      "attrezzo": [
        "elastico",
        "sbarra"
      ],
      "propedeutico_a": [
        "australian_row"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x10",
        "standard": "3x12",
        "intenso": "4x15"
      },
      "media": null,
      "descrizione": "Elastico ancorato alla sbarra o struttura. Busto inclinato in avanti, tira le estremità verso i fianchi retraendo le scapole. Senti lavorare: gran dorsale, romboidi e bicipiti. Errore comune: usare il busto per rimbalzare invece di tirare con le braccia."
    },
    {
      "id": "curl_elastico",
      "name": "Curl bicipiti con elastico",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "bicipiti",
        "avambracci"
      ],
      "difficolta": 1,
      "attrezzo": [
        "elastico"
      ],
      "propedeutico_a": [
        "chin_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x12",
        "standard": "3x15",
        "intenso": "3x20"
      },
      "media": null,
      "descrizione": "In piedi con l'elastico sotto i piedi, tieni le estremità con i palmi rivolti in su. Fletti i gomiti portando le mani verso le spalle tenendo i gomiti fermi ai fianchi. Senti lavorare: bicipiti e brachiale. Errore comune: muovere i gomiti in avanti usando il movimento del busto."
    },
    {
      "id": "overhead_press_elastico",
      "name": "Overhead Press con elastico",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "deltoide",
        "tricipiti",
        "trapezio superiore"
      ],
      "difficolta": 2,
      "attrezzo": [
        "elastico"
      ],
      "propedeutico_a": [
        "pike_push_up",
        "handstand_push_up_wall"
      ],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "vertical_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x10",
        "standard": "3x12",
        "intenso": "4x15"
      },
      "media": null,
      "descrizione": "In piedi con l'elastico sotto i piedi, tieni le estremità all'altezza delle spalle con i palmi rivolti in avanti. Spingi verso l'alto estendendo completamente le braccia, poi abbassa controllato. Senti lavorare: deltoide, tricipiti e trapezio superiore. Errore comune: inarcare la schiena durante la spinta."
    },
    {
      "id": "external_rotation_elastico",
      "name": "External Rotation con elastico",
      "categoria": "tirata",
      "tipo": "forza",
      "muscoli": [
        "rotatori esterni spalla",
        "infraspinato",
        "piccolo rotondo"
      ],
      "difficolta": 1,
      "attrezzo": [
        "elastico",
        "struttura"
      ],
      "propedeutico_a": [],
      "richiede": [],
      "recupero": 30,
      "skill_target": false,
      "pattern": "horizontal_pull",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x12/lato",
        "standard": "3x15/lato",
        "intenso": "3x20/lato"
      },
      "media": null,
      "descrizione": "Elastico ancorato lateralmente all'altezza del gomito. Gomito piegato a 90° e tenuto al fianco, ruota l'avambraccio verso l'esterno contro la resistenza. Senti lavorare: cuffia dei rotatori, in particolare infraspinato e piccolo rotondo. Errore comune: allontanare il gomito dal fianco durante la rotazione."
    },
    {
      "id": "tricep_pushdown_elastico",
      "name": "Tricep Pushdown con elastico",
      "categoria": "spinta",
      "tipo": "forza",
      "muscoli": [
        "tricipiti"
      ],
      "difficolta": 1,
      "attrezzo": [
        "elastico",
        "sbarra"
      ],
      "propedeutico_a": [
        "diamond_push_up"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "horizontal_push",
      "fase": "potenziamento",
      "sets": {
        "leggero": "3x12",
        "standard": "3x15",
        "intenso": "3x20"
      },
      "media": null,
      "descrizione": "Elastico ancorato alla sbarra in alto, tieni le estremità con i gomiti fermi ai fianchi a 90°. Spingi verso il basso estendendo completamente il gomito, poi risali lento. Senti lavorare: tricipiti in isolamento. Errore comune: muovere i gomiti in avanti o indietro invece di tenerli fissi."
    },
    {
      "id": "jefferson_curl",
      "name": "Jefferson Curl",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "catena posteriore",
        "lombari",
        "femorali",
        "trapezio"
      ],
      "difficolta": 2,
      "attrezzo": [
        "sbarra",
        "struttura"
      ],
      "propedeutico_a": [],
      "richiede": [],
      "recupero": 60,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x5",
        "standard": "3x6",
        "intenso": "3x8"
      },
      "media": null,
      "descrizione": "In piedi, fletti la colonna vertebra per vertebra partendo dal collo verso il basso lasciando che il peso corporeo tiri, poi estendi lentamente nello stesso ordine. Senti lavorare: catena posteriore e lombari in allungamento profondo. Errore comune: scendere tutto insieme invece di articolare vertebra per vertebra."
    },
    {
      "id": "reverse_crunch",
      "name": "Reverse Crunch",
      "categoria": "core",
      "tipo": "forza",
      "muscoli": [
        "addominali bassi",
        "flessori anca",
        "core"
      ],
      "difficolta": 1,
      "attrezzo": [
        "terra"
      ],
      "propedeutico_a": [
        "tuck_l_sit",
        "hanging_leg_raise"
      ],
      "richiede": [],
      "recupero": 45,
      "skill_target": false,
      "pattern": "core",
      "fase": "core",
      "sets": {
        "leggero": "3x12",
        "standard": "3x15",
        "intenso": "3x20"
      },
      "media": null,
      "descrizione": "Sdraiato con le ginocchia piegate verso il petto, solleva il bacino portando le ginocchia verso il viso contraendo gli addominali. Senti lavorare: core inferiore e obliqui. Errore comune: usare il momentum dondolando invece di contrarre attivamente il core."
    }
  ]
};