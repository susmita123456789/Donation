"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import homeData from "@/data/home.json";
import { useRouter } from "next/navigation";
import Footer from "../../components/footer";
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Landing() {
  const router = useRouter();
  React.useEffect(() => {
    homeData.donationHeads.forEach((donationHead: any) => {
      donationHead.donationItems.forEach((item: any) => {
        router.prefetch(
          `/donate?amount=${item.amount}&remarks=${item.seva}&tax_details=true&ask_special_days=true`
        );
      });
    });
  }, []);
  const [name, setName] = React.useState(0)
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-3 lg:px-8 body1">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-2">
          <Image
            className="ml-auto mr-auto "
            
            src="/iskcon-gurgaon-logo.png"
            alt="logo"
            width={140}
            height={10}
            priority
          />
        </div>
        {/* <Carousel afterChange={onChange}>
            {homeData.sliders.map((url: any) => (
              <div>
                <Image
                  className="ml-auto mr-auto mb-2"
                  src={url}
                  alt="slider"
                  width={0}
                  height={0}
                  sizes="70vw"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
            ))}
        </Carousel> */}
        <Carousel afterChange={onChange} autoplay arrows draggable infinite easing="linear" className="shadow-2xl">
          {homeData.sliders.map((url: string, index: number) => (
            <div key={index} className="image-container">
              <img
                src={url}
                alt={`slider-${index}`}
                className="image"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Carousel>
        <h3 className="mt-12 inline-block px-6 py-2 lg:ml-6 rounded-full bg-purple-100 w-fit">
          <span className="text-purple-700 font-semibold">
            {homeData.tag}
          </span>
        </h3>
        <h1 className="text-4xl font-bold text-gray-800 lg:ml-6 mb-6 mt-7 text-left font-sans">
          Small steps to make a <span className="nnn">Big Impact.</span>
        </h1>
        <br />
        <p className="text-lg text-gray-600 mb-8 text-left lg:ml-6 font-sans">
          {homeData.description}
        </p>

        <div className="sm:mx-auto sm:w-full sm:max-w-full">
          {/* <div id="accordion-collapse" className="w-full mx-auto">
            {homeData.donationHeads.map((donationHead: any, headIndex: number) => (
              <div key={headIndex} className="mb-4">
                <h2 id={`accordion-${donationHead.name}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-gray-800 border shadow-md shadow-blue-100 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    onClick={() => toggleAccordion(donationHead.name)}
                    aria-expanded={openItem === donationHead.name}
                    aria-controls={`accordion-body-${donationHead.name}`}
                  >
                    <span className="text-xl">{donationHead.name}</span>
                    <svg
                      className={`w-3 h-3 transform transition-transform ${
                        openItem === donationHead.name ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                {openItem === donationHead.name && (
                  <div
                    id={`accordion-body-${donationHead.name}`}
                    className="p-5 border rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <div className="flex flex-wrap gap-3 justify-center">
                      {donationHead.donationItems.map((item: any, index: number) => (
                        <Button
                          key={index}
                          className="mr-2"
                          onClick={() =>
                            router.push(
                              `/donate?amount=${item.amount}&remarks=${item.seva}&tax_details=true&ask_special_days=true`
                            )
                          }
                        >
                          {item.seva}
                          {item.amount != 'null' && `: Rs. ${item.amount}`}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div> */}
          <div id="donation-sections" className="w-full mx-auto">
            {homeData.donationHeads.map((donationHead: any, headIndex: number) => (
              <div
                key={headIndex}
                className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl  border border-blue-100 dark:border-gray-700"
              >
                {/* Section Title */}
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  {donationHead.name}
                </h2>
                
                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {donationHead.donationItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      onClick={() =>
                        router.push(
                          `/donate?amount=${item.amount}&remarks=${item.seva}&tax_details=true&ask_special_days=true`
                        )
                      }
                      className="cursor-pointer border border-gray-300 hover:bg-blue-50 hover:border-blue-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 text-center bg-white dark:bg-gray-900 dark:border-gray-700"
                    >
                      {/* Card Image */}
                      <img
                        src={item.image}
                        alt={item.seva}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                    
                      {/* Card Title */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {item.seva}
                      </h3>
                    
                      {/* Card Amount */}
                      {item.amount != 'null' && (
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Rs. {item.amount}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
