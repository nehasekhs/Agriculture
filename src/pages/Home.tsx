import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';   
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import Corevalues from './Corevalues';


function StatCounter({ value, isP, isH }: { value: number; isP: boolean; isH: boolean }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    if (!isCounting) return;

    let start = 0;
    const end = value;
    const duration = 2000; 
    const incrementTime = 16; // Interval between increments (60 FPS)

    const step = Math.ceil(end / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value, isCounting]);

  return (
    <motion.span
      onViewportEnter={() => setIsCounting(true)} // Trigger counting when the element enters the viewport
    >
      {isP ? (
        <p>{count}%</p>
      ) : isH ? (
        <h1>24/7</h1>
      ) : (
        <h2>{count}+</h2>
      )}
    </motion.span>
  );
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const parallaxRef = useRef(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const element = parallaxRef.current;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        scrub: true,
        start: '-5% top', // Adjust as needed
        end: 'bottom top', // Adjust as needed
        // markers: true,
      },
      scale: 1.2,
      yPercent: -10,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  useEffect(() => {
    imageRefs.current.forEach((element) => {
      if (element) {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            scrub: true,
            // start: 'top top', // Adjust as needed
            // end: 'bottom top', // Adjust as needed
          },
          yPercent: -20,
          ease: 'none',
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [imageRefs]);


  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[91.5vh] bg-cover bg-center" style={{
       
        // backgroundImage: 'url("/public/bg/bg.jpg")'
      }}>
        <div
          ref={parallaxRef}
          className="absolute w-full h-full">
          <img src="/bg/bg2.jpg" alt="Hero Image" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-10 justify-center text-center h-full flex items-center">
          {/* <div className="text-white max-[770px]:hidden">

            <Reveal>
              <motion.h1
                className="bg-red-500 h-auto w-full max-[770px]:hidden overflow-hidden font-bold max-md:text-[6vw] max-sm:text-[9vw] max-lg:leading-[1.3] mb-6 text-[4vw] text-transparent bg-clip-text bg-gradient-to-br from-green-50 tracking-tighter to-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Transforming Agriculture through Data-driven Solutions

              </motion.h1>
            </Reveal>
            <Reveal delay={0.7}>
              <p className="text-xl mb-8 min-md:text-[4vw] max-sm:text-[3.5vw] max-[770px]:hidden">Nurturing Communities through Innovation and Sustainability</p>
            </Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-4 justify-center max-[770px]:hidden ">
              <Link to="/contact" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/our-story" className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition duration-300">
                Learn More
              </Link>
            </motion.div>
          </div> */}
          <div className="flex  items-center text-center flex-col gap-5">
            {/* <div className="logo">
              <img src="/logo/logo_bg.png" alt="Logo" className="w-20 h-20" />
            </div> */}
            <h1 className='uppercase text-white font-bold text-4xl'>Hivictus</h1>
            <p className='text-white font-medium text-3xl'>Transforming Agriculture through innovative and data driven solutions.

            </p>
            <div className="flex flex-col text-white font-bold text-lg">
            {/* <img src="\logo\arrow-down-on-black-background-vector-22564743-removebg-preview.png" alt="Logo" className="w-20 h-20" /> */}
                
              </div>

            <div className="flex space-x-6 mt-8">
  <Link
    to="/our-story"
    className="inline-flex items-center text-[20px] border-2 border-white text-white px-6 py-3 rounded-full hover:scale-110 hover:border-green-300 hover:text-green-300 transition duration-300"
  >
    About
  </Link>
  <Link
    to="/shop"
    className="inline-flex items-center text-[20px] border-2 border-white text-white px-6 py-3 rounded-full hover:scale-110 hover:border-green-300 hover:text-green-300 transition duration-300"
  >
    Shop
  </Link>
</div>

          </div>
        </div>
      </section>
 
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-6">Welcome to Hivictus</h2>
              <p className="text-gray-600 mb-6 text-[18px]">
               At Hivictus, we’re reimagining market access for India’s farmers and FPOs by creating a direct-to-consumer platform that eliminates middlemen and puts rural producers in control of their sales. Our tech-enabled marketplace connects farmers and FPOs with consumers. Hivictus ensures that authentic, farm-sourced staples and goods reach households efficiently, affordably,
                and transparently  building a fair, sustainable agri-commerce ecosystem from soil to shelf.
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                ref={(el) => el && imageRefs.current.push(el)} src="/about/about1.jpg"
                alt="Modern Farming"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 50, label: "Farmers Connected" },
              { value: 50, label: "Businesses Connected" },
              { value: 100, label: "Happy Customers" },
              { value: 24, label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <div className="text-4xl font-bold mb-2">
                  <StatCounter
                    value={stat.value}
                    isP={stat.label === "Happy Customers"}
                    isH={stat.label === "Support Available"}
                  />                </div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      
   <Corevalues/>   


      {/* Solutions Section */}
      
</div>
  );
}
