
import Blog from "../components/Blog";
import Demo from "../components/Demo";
import Fonctionnalites from "../components/Fonctionnalites";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HelpButton from "../components/HelpButton";
import IntroSection from "../components/IntroSection";
import Testemo from "../components/Testemo";

function Home() {
  return (
    <div className="relative overflow-hidden">
      {/*help fixed button*/}
      <div>
        <HelpButton/>
      </div>

      {/*navigation bar section*/}
      <header className='flex items-center justify-center'>
        <Header />
      </header>

      {/*the main section*/}
      <main className='bg-amber-50 w-[100vw]'>

        {/* Intro and Fonctionnalites Section with Background Color */}
        <div className=" pb-40 flex justify-center flex-col items-center">
          <IntroSection />
          <Fonctionnalites />
        </div>

        {/* Salmon Colored Section */}
        <div className="bg-[#FF7F63] pt-12 pb-12 flex justify-center ">
          <Demo />
        </div>

        {/* Dark Section */}
        <div className="bg-gray-900 text-white py-16 flex justify-center">
          <Testemo />
        </div>

        {/*blogs section */}
        <div className="bg-amber-100">
          <Blog />
        </div>

        {/*footer section*/}
        <div className="bg-white">
          <Footer />
        </div>
        
      </main>
    </div>
  )
}

export default Home;