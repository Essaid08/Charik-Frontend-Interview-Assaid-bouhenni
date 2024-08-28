import hubspot from '../assets/foncionalitysAssets/hubspot.webp';
import {
    FaSearchDollar, FaDatabase, FaInternetExplorer, FaSearchPlus, FaGhost,
    FaLinkedin 
} from "react-icons/fa";
import { AiOutlineDropbox } from "react-icons/ai";
import { MdContactEmergency, MdAttachEmail } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { CgEditBlackPoint } from "react-icons/cg";
import { VscLaw } from "react-icons/vsc";
import { GrNotes } from "react-icons/gr";

const Fonctionnalites = () => {
    return (
        <section className="px-8 py-2 max-w-[1380px]">
            {/* Header section */}
            <div className="flex flex-col items-center justify-center">
                {/* Section title */}
                <h2 className="text-[36px] text-center text-[#222326] mb-4 font-sans font-semibold tracking-wider breakpoint-1:text-[44px] breakpoint-1:mb-6 ">
                    Découvrez nos principales fonctionnalités
                </h2>
                {/* Section description */}
                <p className='text-[18px] text-[#6A6D77] mb-6 text-center'>
                    Nos clients gagnent en moyenne 8h par mois en connectant Charik à HubSpot. Grâce à nos fonctionnalités avancées
                    et souvent uniques à ce niveau d'intégration dans votre CRM préféré.
                </p>
                {/* Underline for emphasis */}
                <div className="h-1 w-24 bg-[#F65954]"></div>
            </div>

            {/* Features grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 breakpoint-1:grid-cols-3 gap-4">
                {/* Feature 1 */}
                <div className='fct-container'>
                    <div className='fct-img'>
                        <span className='fct-span'>
                            <img src={hubspot} alt="Made for HubSpot" />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Made for HubSpot</h4>
                        <p className='custom-p'>La meilleure intégration que vous verrez avec HubSpot</p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <FaSearchDollar size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Search Companies</h4>
                        <p className='custom-p'>Trouvez des sociétés sur la base de critères multiples.</p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <AiOutlineDropbox size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Add companies</h4>
                        <p className='custom-p'>Ajoutez des sociétés en un clic.</p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <FaDatabase size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Segment your CRM</h4>
                        <p className='custom-p'>Segmentez votre base HubSpot avec des champs dédiés.</p>
                    </div>
                </div>

                {/* Feature 5 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <FaInternetExplorer size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Domain Finder</h4>
                        <p className='custom-p'>HubSpot demande un nom de domaine. On le trouve pour vous.</p>
                    </div>
                </div>

                {/* Feature 6 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <FaSearchPlus size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Search Contacts</h4>
                        <p className='custom-p'>Générez une liste de contacts depuis la fiche société.</p>
                    </div>
                </div>

                {/* Feature 7 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <MdContactEmergency size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Add Contacts</h4>
                        <p className='custom-p'>Jetez vos claviers, ajoutez un contact en un clic.</p>
                    </div>
                </div>

                {/* Feature 8 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <MdAttachEmail size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Email Finder</h4>
                        <p className='custom-p'>Découvrez les adresses e-mail professionnelles de vos contacts.</p>
                    </div>
                </div>

                {/* Feature 9 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <FaGhost size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Phone Finder</h4>
                        <p className='custom-p'>Associez votre fournisseur de données préféré : Kaspr, Apollo, ...</p>
                    </div>
                </div>

                {/* Feature 10 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <FaLinkedin size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Linkedin Contact</h4>
                        <p className='custom-p'>Ajoutez un contact de LinkedIn en un seul clic.</p>
                    </div>
                </div>

                {/* Feature 11 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <IoMdDoneAll size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>No Duplicates</h4>
                        <p className='custom-p'>Enfin, une application qui ne crée pas de doublons.</p>
                    </div>
                </div>

                {/* Feature 12 */}
                <div className='fct-container'>
                    <div className='fct-icon'>
                        <span className='fct-span'>
                            <CgEditBlackPoint size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Gender Reveal</h4>
                        <p className='custom-p'>Vos salutations sont vides ? Laissez-nous vous aider.</p>
                    </div>
                </div>

                {/* Feature 13 */}
                <div className='fct-container'>
                    <div className='fct-icon-green'>
                        <span className='fct-span'>
                            <VscLaw size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Get Financial Data</h4>
                        <p className='custom-p'>Les informations financières des entreprises directement dans HubSpot.</p>
                    </div>
                </div>

                {/* Feature 14 */}
                <div className='fct-container'>
                    <div className='fct-icon-green'>
                        <span className='fct-span'>
                            <GrNotes size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Balance Sheets</h4>
                        <p className='custom-p'>Accédez, annotez et analysez les 3 derniers bilans des sociétés.</p>
                    </div>
                </div>

                {/* Feature 15 */}
                <div className='fct-container'>
                    <div className='fct-icon-green'>
                        <span className='fct-span'>
                            <GrNotes size={32} color='#Ffffff' />
                        </span>
                    </div>
                    <div className='fct-div'>
                        <h4 className='fct-h4'>Finance Filters</h4>
                        <p className='custom-p'>Affiner la recherche par la croissance des bénéfices ou du chiffre d'affaires.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fonctionnalites;
