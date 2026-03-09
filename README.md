# Meditation Website

Questo progetto è una semplice web application realizzata con **React** e **Vite**, pensata per offrire un’esperienza semplice e rilassante per la meditazione.

L'obiettivo è permettere all’utente di impostare un **timer per la meditazione** e concentrarsi sul respiro utilizzando un’interfaccia chiara e intuitiva.

Il progetto utilizza una struttura a componenti tipica delle applicazioni React e separa la logica del timer tramite un **Custom Hook (`useTimer`)** per migliorare la riusabilità e la manutenzione del codice.


## Funzionalità principali

- Timer programmabile per la meditazione
- Avvio, pausa e reset del timer
- Navigazione tra le pagine **Home** e **About**
- Gestione della logica del timer tramite **Custom Hook (`useTimer`)**
- Layout semplice e centrato
- Design **responsive** (adattabile a mobile)
- Immagine e testo introduttivo sulla meditazione


## Tecnologie utilizzate

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- React Hooks (Custom Hook `useTimer`)

## Struttura del progetto

- `src/components` → componenti React (es. Timer, Header, Layout, PageLayout)
- `src/pages` → pagine principali dell'applicazione (Home, About)
- `src/hooks` → custom hook per la logica del timer (`useTimer.js`)
- `src/assets` → immagini utilizzate nell'interfaccia (`meditation.jpg`)
- `App.jsx` → componente principale che gestisce il routing
- `App.css / index.css` → stile dell'applicazione

##  Avvio del progetto

Per avviare il progetto in locale:

npm install
npm run dev