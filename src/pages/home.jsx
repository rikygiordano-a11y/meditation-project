import Timer from "../components/Timer.jsx";

export default function Home() {
  return (
    <main className="container">
      <section className="card">
        <h1>Meditation Timer</h1>
        <p className="subtitle">
          Imposta i minuti, premi Start e concentrati sul respiro.
        </p>

        {/* immagine semplice (non serve API) */}
        <img
          className="hero"
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=60"
          alt="Meditation"
        />

        <Timer />

        <div className="tips">
          <h2>Consigli veloci</h2>
          <ul>
            <li>Siediti comodo e rilassa le spalle.</li>
            <li>Inspira dal naso, espira lentamente.</li>
            <li>Se ti distrai, torna al respiro. È normale.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}