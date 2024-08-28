import ApropsInformation from "../components/ApropsInformation"
import Demo from "../components/Demo"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HelpButton from "../components/HelpButton"
import Timeline from "../components/Timeline"


const Aprops = () => {
    return (
        <div className=" relative overflow-hidden ">

            {/*help fixed button*/}
            <div>
                <HelpButton />
            </div>

            <div className='flex items-center justify-center'>
                <Header />
            </div>

            <div className="bg-red-500 w-[100vw]">
                <ApropsInformation />
            </div>

            {/*timeLine section */}
            <div className="bg-slate-100 w-screen">
                <Timeline />
            </div>

            <div className="bg-[#FF7F63] pt-12 pb-12 flex justify-center ">
                <Demo />
            </div>

            <div className="bg-white">
                <Footer />
            </div>

        </div>
    )
}

export default Aprops