import meditationImage from "../assets/meditation.jpg";
import PageLayout from "../components/PageLayout";
import Timer from "../components/Timer";

function Home() {
  return (
    <PageLayout title="Meditation Timer">

      <img
        src={meditationImage}
        alt="Meditation"
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />

      <p>
        La meditazione è una pratica che aiuta a rilassare la mente
        e migliorare la concentrazione.
      </p>

      <Timer />

    </PageLayout>
  );
}

export default Home;