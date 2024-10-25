import Navbar from "../common/Navbar";
import NavFooter from "../common/NavFooter";
import Hero from "../section/Hero";

export default function LandingPage() {
  return (
    <main className="flex flex-col "> 
      <div className="flex-grow"> 
        <Navbar />
       </div>
          <div className="">
           <Hero />
          </div>
      <footer className="w-full block sm:hidden justify-center items-center">
        <NavFooter />
      </footer>
    </main>
  );
}
