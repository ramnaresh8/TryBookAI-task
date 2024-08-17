import StarAnimation from "./components/BackgroundAnimation/page";
import Header from "./components/Header/page";
import Hero from "./components/Hero/page";
import MainContent from "./components/MainContent/page";
import Features from "./components/Features/page";

export default function Home() {
  return (
    <div className="max-w-full ">
      <div className="mb-0">
        <Header />
      </div>
      <div className="mt-0">
        <StarAnimation />
      </div>
      <Hero />
      <MainContent />
      <Features />
    </div>
  );
}
