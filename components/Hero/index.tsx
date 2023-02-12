import Image from "next/image";
import heroImage from "../../public/hero_banner.png";

export default function Hero() {
  // A full-screen header with a hero image showcasing the developer's skills, highlighting their expertise in web development, machine learning, and being a CTO. A call-to-action to view their portfolio or learn more about them.

  return (
    <div className="relative flex flex-col bg-base-200 h-screen max-w-screen max-h-screen">
      <div className="relative h-screen w-screen bg-base-300 max-w-screen max-h-screen">
        <div className="w-full h-full items-start max-h-screen max-w-full">
          <Image
            alt="Digital art portrait of Ben"
            src={heroImage}
            fill={true}
            objectFit="cover"
            objectPosition="right"
            className="rounded-br-2xl"
          />
        </div>
      </div>
      <div className="absolute h-full flex-col flex w-full prose-lg md:prose-2xl p-4 sm:p-0">
        <div className="flex-1 flex-row self-center w-full"></div>
        <div className="flex flex-1 flex-col px-2 sm:px-16 py-4 text-base-content w-full items-start pl-0 lg:pl-4 xl:pl-16 2xl:pl-32">
          <div className="bg-base-100 flex flex-col w-full h-full px-2 sm:pl-8 pt-16 bg-opacity-75 rounded-3xl max-w-screen md:max-w-screen-md">
            <div className="pl-4">
              <h1 className="text-primary-content">Ben Flanders</h1>
              <h3 className="text-primary-content">
                Machine Learning Engineer, Web Developer, Entrepreneur
              </h3>
              <h3 className="text-primary-content">Benrflanders@gmail.com</h3>
            </div>
            <div className="flex flex-1 items-center justify-center pl-0 md:pl-64 sm:pt-16 p-0 sm:p-16 pb-4">
              <button className="btn-circle btn-primary w-full max-w-xs md:max-w-md">
                Learn More About Ben
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-row self-center w-full"></div>
      </div>
    </div>
  );
}
