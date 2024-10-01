import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsData = [
    {
      name: 'John Doe',
      position: 'Customer Contact Specialist',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum est vero corrupti temporibus vel, delectus eveniet commodi quo.',
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Specialist',
      text: 'Reprehenderit temporibus eveniet commodi quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      name: 'Michael Lee',
      position: 'Sales Manager',
      text: 'Harum est vero corrupti temporibus vel. Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      name: 'Emily Davis',
      position: 'HR Specialist',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum est vero corrupti temporibus vel.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <div className="items-center justify-center text-center mt-16">
      <h1 className="text-3xl lg:text-5xl font-semibold mb-10">Testimonials</h1>
      <Slider {...settings} className="flex flex-col gap-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`p-4 transition-transform duration-500 ${
              activeIndex === index ? 'scale-105 z-10' : 'scale-95 opacity-50'
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto flex flex-col gap-4 items-center">
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text}
              </p>
              <div className="p-5 rounded-full bg-gray-300 w-16 h-16">img</div>
              <div className="flex flex-col">
                <h1>{testimonial.name}</h1>
                <p className="text-[12px] text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonals;
