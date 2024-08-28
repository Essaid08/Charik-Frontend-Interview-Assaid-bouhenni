import { CgEditBlackPoint } from 'react-icons/cg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import imbound from '../assets/timelines/INBOUND-2016-HUBSPOT-BOSTON-min.webp'
import illustration from '../assets/timelines/illustration keypeole plus.webp'
import logo from '../assets/timelines/logo-carre-charik - mignature.webp'
import ws from '../assets/timelines/WS QATAR Startup charik-min.webp'
import charik from '../assets/timelines/charik app v2 keypeople-min.webp'
import peackok from '../assets/timelines/peacock-program-partners.webp'
import day from '../assets/timelines/Day 1 card isolated on white background.webp'

const Timeline = () => {
    return (
        <div className="max-w-[1380px] py-28 px-6 mx-auto">
            {/* Header section */}
            <div className='mb-20'>
                <div className="flex flex-col items-center justify-center">
                    {/* Timeline title */}
                    <p className='text-[22px] text-[#6A6D77] mb-6 text-center tracking-widest'>
                        Timeline
                    </p>
                    <h2 className="text-[36px] text-center text-[#222326] mb-4 font-sans tracking-widest font-semibold tracking-wider breakpoint-1:text-[44px] breakpoint-1:mb-6 ">
                        A charik Story
                    </h2>
                    <div className="h-1 w-24 bg-[#F65954]"></div>
                </div>
            </div>
            
            {/* Vertical Timeline */}
            <div>
                <VerticalTimeline>
                    {/* Timeline Element 1 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Aug-2016"
                        iconStyle={{ background: 'white', color: 'red' }}
                        icon={<CgEditBlackPoint size={24} />}
                    >
                        <div className='flex flex-col gap-6 justify-center items-center breakpoint-1:flex-row'>
                            <div className='px-[10px] pl-[10px] pr-6'>
                                <h3 className='text-[28px] text-[#222326] mb-6 font-bold'>
                                    Partenariat avec HubSpot
                                </h3>
                                <p className='text-[#6A6D77] text-[16px]'>
                                    Jimmy (notre fondateur) a commencé son parcours en tant que partenaire HubSpot et
                                    a rapidement évolué pour devenir l'un des 20 meilleurs partenaires HubSpot dans le monde.
                                </p>
                            </div>
                            <div className='flex items-center justify-center px-3'>
                                <img src={imbound} alt="Partenariat avec HubSpot" className='md:max-w-[80px]'/>
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    {/* Timeline Element 2 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Apr 2023"
                        iconStyle={{ background: 'white', color: 'red' }}
                        icon={<CgEditBlackPoint size={24} />}
                    >
                        <div className='flex flex-col justify-center items-center md:flex-row'>
                            <div className='px-[10px] pl-[10px] pr-6'>
                                <h3 className='text-[28px] text-[#222326] mb-6 font-bold'>
                                    Charik V1.0
                                </h3>
                                <p className='text-[#6A6D77] text-[16px]'>
                                    Un groupe restreint de clients nous a fait confiance, et ensemble,
                                    nous avons collaboré pour créer la première version de notre produit.
                                </p>
                            </div>
                            <div className='flex items-center justify-center px-3'>
                                <img src={illustration} alt="Charik V1.0" />
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    {/* Timeline Element 3 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Dec 2023"
                        iconStyle={{ background: 'white', color: 'red' }}
                        icon={<CgEditBlackPoint size={24} />}
                    >
                        <div className='flex flex-col justify-center items-center md:flex-row'>
                            <div className='px-[10px] pl-[10px] pr-6'>
                                <h3 className='text-[28px] text-[#222326] mb-6 font-bold'>
                                    Lancement de Charik
                                </h3>
                                <p className='text-[#6A6D77] text-[16px]'>
                                    Dévoilement de notre premier site web et lancement de notre logiciel.
                                </p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img src={logo} alt="Lancement de Charik" />
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    {/* Timeline Element 4 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Dec 2023"
                        iconStyle={{ background: 'white', color: 'red' }}
                        icon={<CgEditBlackPoint size={24} />}
                    >
                        <div className='flex flex-col justify-center items-center md:flex-row'>
                            <div className='px-[10px] pl-[10px] pr-6'>
                                <h3 className='text-[28px] text-[#222326] mb-6 font-bold'>
                                    Startup Alpha au WebSummit Qatar
                                </h3>
                                <p className='text-[#6A6D77] text-[16px]'>
                                    Nous sommes ravis d'avoir été sélectionnés parmi les 100 startups invitées
                                    à participer au premier WebSummit au Qatar.
                                </p>
                            </div>
                            <div className='flex items-center justify-center px-3'>
                                <img src={ws} alt="Startup Alpha au WebSummit Qatar" className='md:w-80'/>
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    {/* Timeline Element 5 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Avr 2024"
                        iconStyle={{ background: 'white', color: 'red' }}
                        icon={<CgEditBlackPoint size={24} />}
                    >
                        <div className='flex flex-col justify-center items-center md:flex-row'>
                            <div className='px-[10px] pl-[10px] pr-6'>
                                <h3 className='text-[28px] text-[#222326] mb-6 font-bold'>
                                    Charik V2.0
                                </h3>
                                <p className='text-[#6A6D77] text-[16px]'>
                                    Un an après la version 1.0, nous sommes fiers de dévoiler notre dernière mise à jour du site Web et du logiciel
                                    conçue pour améliorer l'utilisation de l'intelligence commerciale pour les utilisateurs de HubSpot.
                                </p>
                            </div>
                            <div className='flex items-center justify-center px-3'>
                                <img src={charik} alt="Charik V2.0" />
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    {/* Timeline Element 6 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Mai 2024"
                        iconStyle={{ background: 'white', color: 'red' }}
                        icon={<CgEditBlackPoint size={24} />}
                    >
                        <div className='flex flex-col justify-center items-center md:flex-row'>
                            <div className='px-[10px] pl-[10px] pr-6'>
                                <h3 className='text-[28px] text-[#222326] mb-6 font-bold'>
                                    Lancement du programme partenaires
                                </h3>
                                <p className='text-[#6A6D77] text-[16px]'>
                                    La création d'un réseau d'experts HubSpot qui souhaitent offrir des gains de productivité à leurs clients.
                                </p>
                            </div>
                            <div className='flex items-center justify-center px-3'>
                                <img src={peackok} alt="Lancement du programme partenaires" className='md:w-70'/>
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    {/* Timeline Element 7 */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Why not today ?"
                        iconStyle={{ background: 'white', color: 'red' }}
                        icon={<CgEditBlackPoint size={24} />}
                    >
                        <div className='flex flex-col justify-center items-center md:flex-row'>
                            <div className='px-[10px] pl-[10px] pr-6'>
                                <h3 className='text-[28px] text-[#222326] mb-6 font-bold'>
                                    Vous devenez notre client
                                </h3>
                                <p className='text-[#6A6D77] text-[16px]'>
                                    Et vous gagnez du temps chaque jour avec HubSpot et Charik.
                                </p>
                            </div>
                            <div className='flex items-center justify-center px-16'>
                                <img src={day} alt="Vous devenez notre client" />
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Timeline;
