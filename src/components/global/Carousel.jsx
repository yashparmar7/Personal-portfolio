import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import project1Img from "../../assets/proj-1.png";
import project2Img from "../../assets/proj-2.png";
import project3Img from "../../assets/proj-3.png";
import project4Img from "../../assets/proj-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

// Array of images with corresponding URLs
const projects = [
  {
    img: project3Img,
    link: "https://staynest-ejvd.onrender.com/listings",
    alt: "Project-3 StayNest ",
  },
  {
    img: project4Img,
    link: "https://letnotes.netlify.app/",
    alt: "Project-4 Let's Notes ",
  },
  {
    img: project1Img,
    link: "https://react-virtual.vercel.app",
    alt: "Project-1 VirtualR ",
  },
  {
    img: project2Img,
    link: "https://coffee-cultures.netlify.app",
    alt: "Project 2 Coffee Culture",
  },
];

const CarouselWork = () => {
  return (
    <Carousel className="w-full max-w-screen-lg mx-auto px-2">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <div className="p-2 sm:p-4 relative w-full max-w-screen-lg">
              <Card className="w-full h-auto overflow-hidden rounded-lg shadow-lg">
                <CardContent className="relative p-0">
                  {/* Image */}
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                  />

                  {/* Overlay Link */}
                  <a
                    href={project.link}
                    className="absolute top-4 md:top-6 right-4 sm:right-6 md:right-32 text-[#12F7D6] text-xs sm:text-sm md:text-base lg:text-lg font-semibold underline underline-offset-8 decoration-white"
                  >
                    View Website
                    <FontAwesomeIcon
                      icon={faExternalLink}
                      className="text-white ml-2"
                    />
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselWork;
