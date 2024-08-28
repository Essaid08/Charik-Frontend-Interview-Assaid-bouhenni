import wining from '../assets/Charik-winning-Sales-intelligence-peacock-min-2_1.webp'

const IntroSection = () => {
    return (
        <section className='flex items-center justify-center px-8 py-8 max-[1139px]:flex-col-reverse max-w-[1380px]'>
            <div className='mb-6 flex flex-col items-start justify-start max-[1139px]:items-center pr-16 max-[1139px]:pr-0'>
                <h2 className='text-[44px] mb-6 font-semibold text-[#222326] max-[768px]:text-[28px] max-[1139px]:mb-2'>Optez pour la</h2>
                <span className='text-[44px] max-[768px]:text-[28px] text-[#37B94C] font-semibold'>Sales Intelligence 🦚</span>
                <h2 className='text-[44px] mb-6 font-semibold text-[#222326] max-[768px]:text-[28px]'>dédiée à
                    <span className='text-[#FF7C57]'> HubSpot 🚀</span>
                </h2>
                <p className='text-[18px] text-[#6A6D77] mb-6 text-center breakpoint-1:text-start'>
                    Ajoutez des contacts et des sociétés depuis n'importe où : LinkedIn, le web, ... et même HubSpot.</p>
                <strong className='text-[36px] text-[#3096E4] max-[768px]:text-[28px]  font-bold'>Save Time, Sell More.</strong>
                <a
                    className='text-[18px] text-[#F65954] px-6 py-4 border-[#F65754]  border rounded-xl hover:text-yellow-50
                    hover:bg-[#F65754] hover:border-none transi hover:scale-110 mt-6'
                    href="">
                    Découvrez nos offres
                </a>
            </div>
            <div className='max-[1139px]:max-w-[400px]'>
                <img src={wining} alt="" />
            </div>
        </section>
    )
}

export default IntroSection