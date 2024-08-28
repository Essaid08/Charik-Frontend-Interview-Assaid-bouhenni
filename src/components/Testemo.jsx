import { useState } from 'react';
import test1 from '../assets/testos/tes1_1.webp';
import test2 from '../assets/testos/tes2.webp';
import test3 from '../assets/testos/test3.webp';
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Initialize an array of persons objects to dynamically render testimonials
const personnes_data = [
    {
        imag: test1,
        content: '“Charik est un outil indispensable pour toute entreprise cherchant à exploiter HubSpot à son plein potentiel.”',
        author: 'Antoine Charpin',
        role: 'CEO , DigitelWeb'
    },
    {
        imag: test2,
        content: '“Charik nous a permis de nous lancer rapidement sur un nouveau marché en intégrant de nouveaux contacts très rapidement”',
        author: 'Toufik Tellai',
        role: 'CEO , Numoo Agency'
    },
    {
        imag: test3,
        content: '“Les fonctionnalités financières intégrées directement à HubSpot permettent une analyse rapide des sociétés”',
        author: 'Soukanda Bentaleb',
        role: "Directrice d'investissement | Private Equity"
    },
];

const Testemo = () => {
    // State to keep track of the current testimonial index
    const [current, setCurrent] = useState(0);
    const length = personnes_data.length;

    // Function to move to the previous testimonial
    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Function to move to the next testimonial
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <section className="max-w-[1380px] flex justify-center items-center py-16 px-8">
            <div className='flex flex-col'>
                {/* Display star rating */}
                <div className='flex justify-center items-center mb-10'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                </div>
                
                {/* Render the current testimonial */}
                {
                    personnes_data.map((persone, index) => index === current && (
                        <div key={index}>
                            {/* Testimonial content */}
                            <div className='pb-[40px] flex items-start gap-6 md:gap-12'>
                                <FaQuoteRight size={38} color='purple' />
                                <h2 className='text-white text-2xl md:text-3xl font-bold max-w-3xl'>{persone.content}</h2>
                            </div>
                            {/* Author information and navigation arrows */}
                            <div className='flex gap-4 items-end justify-between'>
                                <div className='flex items-center gap-3'>
                                    <div>
                                        <img className='w-24 rounded-full border-pink-600' src={persone.imag} alt={persone.author} />
                                    </div>
                                    <div>
                                        <h6 className='text-white'>{persone.author}</h6>
                                        <span className='text-white'>{persone.role}</span>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <IoIosArrowBack size={42} onClick={prev} className='cursor-pointer' />
                                    <IoIosArrowForward size={42} onClick={next} className='cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Testemo;
