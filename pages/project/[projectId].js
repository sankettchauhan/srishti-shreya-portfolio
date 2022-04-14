import { useRouter } from "next/router";
import Image from "next/image";
import Nav from "../../components/Nav";
import { PROJECTS } from "../../content/projects";
import Footer from "../../components/Footer";

export default function Project() {
  const router = useRouter();
  const { projectId } = router.query;
  // console.log(projectId);
  // console.log(PROJECTS);
  const project = PROJECTS[projectId];
  const constantImage = project?.constant;
  const projectImages = project?.images;
  console.log(projectImages);
  return (
    <>
      {/* <Nav /> */}
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
