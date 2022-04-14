import { useRouter } from "next/router";
import Image from "next/image";
// import Nav from "../../components/Nav";
import { PROJECTS } from "../../content/projects";
import Footer from "../../components/Footer";
import { BiArrowBack } from "react-icons/bi";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  // console.log(projectId);
  // console.log(PROJECTS);
  const project = PROJECTS[projectId];
  const constantImage = project?.constant;
  const projectImages = project?.images;

  const goback = () => {
    router.back();
  };

  return (
    <>
      {/* <Nav /> */}
      <a
        className="absolute text-3xl m-8 border-2 border-white rounded-full p-2 cursor-pointer"
        onClick={goback}
      >
        <BiArrowBack />
      </a>
      {/* parallax image */}
      <div
        style={{ backgroundImage: `url(${constantImage})` }}
        className="h-[300px] w-full bg-fixed bg-cover "
      />
      {/* content starts here */}
      {projectImages &&
        projectImages.map((project, index) => {
          console.log(project);
          return (
            <div key={`${project}-${index + 1}`} className="w-full">
              <Image
                src={project}
                layout="responsive"
                width={321}
                height={460}
              />
            </div>
          );
        })}
      <Footer />
    </>
  );
}
