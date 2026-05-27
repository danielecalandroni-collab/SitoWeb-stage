# DenseBoneOpossum - v0.0.1

> Un progetto React nato per esercitarsi seriamente nel frontend moderno, nella componentizzazione dell’interfaccia e nella gestione di un workflow reale con Node.js e Git.

> Il nome? `DenseBoneOpossum`.
> Reason why? None.

---

## Obiettivo del progetto

Questo progetto nasce come sandbox tecnica per allenarsi sui concetti fondamentali dello sviluppo frontend moderno.

L’obiettivo principale è costruire solide basi pratiche attraverso:

* compilazione e runtime tramite Node.js
* componentizzazione HTML tramite React
* gestione dello stato e della struttura UI
* styling con CSS vanilla
* organizzazione del codice frontend
* pratica con workflow Git realistici
* sviluppo incrementale di un progetto reale

DenseBoneOpossum non vuole essere solo una raccolta di componenti scollegati, ma un ambiente di apprendimento progressivo.

La prima fase del progetto è focalizzata sull’apprendimento delle fondamenta.

Successivamente, il progetto evolverà gradualmente in un sito completo e strutturato, permettendo allo studente di affrontare problematiche più realistiche legate allo sviluppo frontend moderno.

---

## Stack Tecnologico

* **React**
* **JavaScript (ES6+)**
* **Plain CSS**

Uno stack volutamente semplice, diretto e “meccanico” da utilizzare, utile per comprendere davvero il funzionamento base di un progetto web senza astrarre troppo presto le complessità.

Prima di aggiungere strumenti avanzati, è importante capire bene cosa succede sotto il cofano.

---

## Focus Tecnico

### Componentizzazione

L’interfaccia viene suddivisa in componenti piccoli, riutilizzabili e semanticamente isolati.

Esempi:

* `Button`
* `Card`
* `Navbar`
* `Sidebar`
* `Modal`
* `FormInput`

L’idea è allenarsi a:

* separare responsabilità
* evitare duplicazione
* mantenere il codice leggibile
* ragionare in termini di UI architecture
* costruire componenti realmente riutilizzabili

---

### Styling con Plain CSS

Il progetto utilizza CSS classico senza librerie esterne.

Questo approccio serve per:

* capire davvero il cascade model
* gestire layout moderni con Flexbox/Grid
* migliorare naming e organizzazione dei file CSS
* sviluppare sensibilità sul design delle interfacce
* evitare dipendenze premature

Perché sì, Tailwind è comodo.
Ma prima bisogna soffrire un po’.

---

### Runtime & Build

L’app gira tramite ambiente Node.js usando npm scripts standard.

Esempio:

```bash
npm install
npm run dev
```

Build di produzione:

```bash
npm run build
```

---

## Evoluzione del Progetto

DenseBoneOpossum è pensato come progetto incrementale.

Dopo la fase iniziale dedicata alle basi, il repository verrà progressivamente trasformato in un sito frontend completo, con pagine, navigazione e architettura più strutturata.

L’obiettivo è permettere allo studente di affrontare problematiche reali come:

* organizzazione di pagine multiple
* routing frontend
* gestione della navigazione
* struttura scalabile dei componenti
* riuso del layout
* gestione dello stato applicativo
* comunicazione frontend/backend

Le pagine del sito non avranno solo uno scopo estetico, ma serviranno soprattutto come esercizio pratico per consolidare conoscenze frontend reali.

---

## Legacy Section

Il progetto includerà anche una sezione `legacy/` dedicata agli esercizi precedenti e agli esperimenti frontend.

Questa area fungerà da archivio tecnico personale contenente:

* landing pages
* esercizi HTML/CSS
* piccoli prototipi UI
* layout experiments
* componenti costruiti durante lo studio
* prove tecniche isolate

L’obiettivo della sezione legacy non è mantenere codice perfetto, ma documentare il percorso di apprendimento e conservare esercizi utili come riferimento futuro.

---

## Roadmap futura

### Collegamento Frontend ↔ Backend

In futuro il progetto verrà espanso con un backend separato.

L’idea è mantenere:

```text
DenseBoneOpossum-frontend/
DenseBoneOpossum-backend/
```

due repository indipendenti comunicanti tramite API REST.

Perché complicarsi la vita in modo elegante è parte della crescita professionale.

---

### Possibili estensioni

* autenticazione JWT
* fetch API / Axios
* gestione environment variables
* database
* routing avanzato
* stato globale
* deploy frontend/backend separati
* Docker
* CI/CD
* testing

---

## Struttura del progetto

Esempio di organizzazione:

```text
src/
│
├── components/
├── pages/
├── styles/
├── assets/
├── hooks/
├── utils/
└── App.jsx
```

Possibile espansione futura:

```text
src/
│
├── components/
├── pages/
├── layouts/
├── hooks/
├── services/
├── context/
├── styles/
├── assets/
├── legacy/
└── App.jsx
```

---

## Filosofia del progetto

Questo repository esiste per:

* fare pratica seriamente
* sbagliare in sicurezza
* migliorare la qualità del codice
* imparare workflow reali
* costruire basi solide
* sviluppare capacità di problem solving
* imparare a strutturare progetti mantenibili

Niente tutorial-copy-paste.
Niente “funziona quindi va bene”.
L’obiettivo è capire cosa si sta facendo.

---

## Come avviare il progetto

Clona la repository:

```bash
git clone <repo-url>
```

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

---

## Note Finali

DenseBoneOpossum è un progetto volutamente libero, iterativo e probabilmente destinato a contenere:

* commit discutibili
* refactor inutilmente aggressivi
* naming temporanei diventati permanenti
* CSS scritto alle 2:14 di notte

Ed è esattamente questo il punto.

---

## Stato del progetto

In costruzione costante.

Ambiente di sperimentazione frontend orientato all’apprendimento progressivo e alla costruzione di basi tecniche solide.
