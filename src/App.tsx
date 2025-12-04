import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Musicians } from "./components/Musicians";
import { Events } from "./components/Events";
import { Support } from "./components/Support";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <Musicians />
      <Events />
      <Support />
      <Footer />
    </div>
  );
}
