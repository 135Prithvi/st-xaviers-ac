import { useState, useEffect } from "react";
// Create this file for CSS styles

const images = [
  // Add image URLs here
  "https://xaviers.ac/____impro/1/onewebmedia/naac%20rank.jpeg",
  "https://xaviers.ac/____impro/1/onewebmedia/XGLP%20Utube%20thumbnail%201%20%281%29-min.jpg",
  "https://xaviers.ac/____impro/1/onewebmedia/Course%20August,%202023%20%281%29-min.jpg",
  // Add more images as needed
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    // Set an interval for auto-advancing the carousel every 3 seconds (adjust as needed)
    const intervalId = setInterval(nextSlide, 3000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel w-screen overflow-hidden overscroll-x-none">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentSlide ? "" : "hidden"
          } transition-transform duration-300 ease-in-out h-screen top-0 bottom-0 left-0 w-full  object-cover`}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(.75)",
          }}
        >
          <div
            className="carousel-caption skew-y-12 transform-gpu text-center absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-4xl min-w-[300px]"
            style={{
              filter: "brightness(2)",
              fontFamily: "Times New Roman",
            }}
          >
            <h1 className=" hover:underline bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg  text-opacity-75 group-hover:text-opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt bg-clip-text text-transparent whitespace-nowrap text-6xl">
              St. Xavier's College, Mumbai
            </h1>
            <h1 className=" hover:underline bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg  text-opacity-75 group-hover:text-opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt bg-clip-text text-transparent text-6xl ">
              {" "}
              (Autonomous)
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
