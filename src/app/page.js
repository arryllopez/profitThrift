import Header from '../components/Header';
import Scanner from '../components/Scanner';
import Results from '../components/Results';
import Camera from '../components/Camera'; // Import Camera component

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main className="py-8">
        <Camera /> {/* Display Python webcam stream */}
        <Scanner />
        <Results />
      </main>
    </div>
  );
}
