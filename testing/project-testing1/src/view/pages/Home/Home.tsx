

import React, { useState } from 'react';


interface Slide {
  src: string;
  label: string;
  description: string;
}
const callouts = [
    {
      name: 'Powder',
      description: ' We have Powder (10) ',
      imageSrc: 'imges/powder.jpg',
      imageAlt: 'Powder.',
      href: '#',
    },
    {
      name: 'Tea Bag',
      description: 'We have Tea Bage (5)',
      imageSrc: 'imges/tea.jpg',
      imageAlt: 'Tea bag.',
      href: '#',
    },
    {
      name: 'Spices',
      description: 'We have Spice (20)',
      imageSrc: 'imges/spice.jpg',
      imageAlt: 'Spices.',
      href: '#',
    },
  ];
const slides: Slide[] = [
  {
    src: 'imges/Frame 19.png',
    label: 'First slide label',
    description: 'Some representative placeholder content for the first slide.',
  },
  {
    src: 'imges/Frame 18.png',
    label: 'Second slide label',
    description: 'Some representative placeholder content for the second slide.',
  },
  {
    src: 'imges/Frame 17.png',
    label: 'Third slide label',
    description: 'Some representative placeholder content for the third slide.',
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };
  

  return (
    
      
        <main>
            <div className="relative" data-twe-carousel-init data-twe-ride="carousel">
            <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleIndicatorClick(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
              index === currentSlide ? 'opacity-100' : ''
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
              index === currentSlide ? '' : 'hidden'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img src={slide.src} alt={`Slide ${index + 1}`}  style={{width:'98%',height:'70vh'}} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{slide.label}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
<div className="relative  bg-emerald-700 " data-twe-carousel-init data-twe-ride="carousel" style={{width: "98%"}}>
<p className="text-center text-3xl text-white">Stay healthy to live happily with with the creative techniques of processing the locally gathered agricultura</p>

</div>


    <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-black">Collections</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                      {callouts.map((callout) => (
                        <div key={callout.name} className="group relative">
                          <div  className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img
                              src={callout.imageSrc}
                              alt={callout.imageAlt}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <h3 className="mt-6 text-sm text-gray-500">
                            <a href={callout.href}>
                              <span className="absolute inset-0" />
                              {callout.name}
                            </a>
                          </h3>
                          <p className="text-base font-semibold text-black">{callout.description}</p>
                        </div>
                      ))}
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 bg-gray-100 ">
                     
<img className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 "
 src="imges/Frame 16.png"
 style={{position:"relative",left:"50vh" }}
  alt="image description"/>

              </div>
        </main>
    
    
  );
};

export default Carousel;
