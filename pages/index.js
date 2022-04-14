import Image from "next/image";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

import { image, description, projects } from "../content/home";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mb-12">
        {/* container */}
        <div className="max-w-screen-lg">
          {/* nav bar */}
          <Nav />
          {/* image and description */}
          <div className="flex justify-center mt-20">
            <div className="flex-1 flex justify-center">
              <Image src={image} height={102} width={282} alt="abhishek" />
            </div>
            <div className="flex-1 flex items-center">{description}</div>
          </div>
          {/* scroll to see work */}
          <div className="flex justify-center mt-8 mb-12">
            <small>Scroll down to see my work</small>
          </div>
          {/* down arrow */}
          <div
            className="absolute left-1/2 -translate-x-1/2 text-fuchsia-600 font-bold"
            style={{ transform: "rotate(90deg) scale(4)" }}
          >
            {">"}
          </div>
          {/* project card */}
          <div className="mt-32">
            {projects.map((project, index) => (
              <ProjectCard {...project} inverted={index % 2 == 0} />
            ))}
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
