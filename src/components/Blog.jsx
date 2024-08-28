import prospecs from '../assets/cards/Optimisation de la Prospection de Leads.webp';
import know from '../assets/cards/Do you know someone.webp';
import hubspot from '../assets/cards/hubspot-charik-versus-ajouter-contact.webp';

function Blog() {
    return (
        <section className="max-w-[1380px] px-8 py-12 mx-auto">
            {/* Header section */}
            <div className="flex flex-col items-center justify-center mb-10">
                {/* Subtitle */}
                <div className="text-[18px] text-[#6A6D77] mb-1 text-center">
                    L'art de vendre intelligemment
                </div>
                {/* Main title */}
                <h2 className="text-[28px] text-center text-[#222326] mb-4 font-sans font-semibold tracking-wide md:text-[36px] breakpoint-1:text-[44px] breakpoint-1:mb-6 ">
                    le blog de la Sales Intelligence
                </h2>
                {/* Description paragraph 1 */}
                <p className="text-[18px] text-[#6A6D77] mb-6 text-center">
                    Découvrez l'avenir de la vente avec notre blog sur l'Intelligence Commerciale.
                </p>
                {/* Description paragraph 2 */}
                <p className="text-[18px] text-[#6A6D77] mb-6 text-center">
                    Là où les données rencontrent la stratégie.
                </p>
                {/* Underline for emphasis */}
                <div className="h-1 w-24 bg-[#F65954]"></div>
            </div>
            {/* Blog cards grid */}
            <div className='flex flex-col justify-center items-center gap-8 md:grid md:grid-cols-3'>
                {/* Blog Card 1 */}
                <div className="card-container">
                    <img src={prospecs} alt="Optimisation de la Prospection de Leads" />
                    <div className='details-div'>
                        <span className='card-span'>Prospection</span>
                        <h4 className='card-h4'>Optimisation de la Prospection de Leads</h4>
                        <p className='card-p'>
                            Pour les dirigeants et les commerciaux, il est essentiel de maîtriser l'art de la prospection, en s'…
                        </p>
                        <div className="h-[1px] w-full bg-[#dadbe0] mt-5"></div>
                        <div className='flex gap-16 items-center mt-4'>
                            <p className='card-p border-r-2 pr-8'>
                                25 August 2024
                            </p>
                            <p className='card-p'>
                                3 min read
                            </p>
                        </div>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="card-container">
                    <img src={know} alt="Trust journey: construire la confiance avec ces prospects" />
                    <div className='details-div'>
                        <span className='card-span'>Prospection</span>
                        <h4 className='card-h4'>Trust journey : construire la confiance avec ces prospects</h4>
                        <p className='card-p'>
                            Pour les dirigeants et les commerciaux, il est essentiel de maîtriser l'art de la prospection, en s'…
                        </p>
                        <div className="h-[1px] w-full bg-[#dadbe0] mt-5"></div>
                        <div className='flex gap-16 items-center mt-4'>
                            <p className='card-p border-r-2 pr-8'>
                                5 June 2024
                            </p>
                            <p className='card-p'>
                                6 min read
                            </p>
                        </div>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="card-container">
                    <img src={hubspot} alt="Ajouter un contact dans Hubspot" className='w-full' />
                    <div className='details-div'>
                        <span className='card-span'>Charik</span>
                        <h4 className='card-h4'>Ajouter un contact dans Hubspot</h4>
                        <p className='card-p'>
                            Pour les dirigeants et les commerciaux, il est essentiel de maîtriser l'art de la prospection, en s'…
                        </p>
                        <div className="h-[1px] w-full bg-[#dadbe0] mt-5"></div>
                        <div className='flex gap-16 items-center mt-4'>
                            <p className='card-p border-r-2 pr-8'>
                                14 May 2024
                            </p>
                            <p className='card-p'>
                                6 min read
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
