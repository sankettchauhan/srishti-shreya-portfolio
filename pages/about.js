import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "../components/Footer";
import ContactMe from "../components/ContactMe";
import { image, links, coverImage } from "../content/about";

export default function about() {
  return (
    <>
      <div className="flex justify-center bg-black">
        {/* container */}
        <div className="max-w-screen-lg">
          {/* nav bar */}
          <Nav />
          {/* content starts here */}
          <div className="flex mt-20">
            {/*image  */}
            <div className="basis-2/5">
              <Image src={image} width={400} height={400} alt="srishti" />
            </div>
            <div className="basis-3/5">
              <div className="text-fuchsia-600 font-bold text-xl ">
                I&apos;m
              </div>
              <div className="text-fuchsia-600 font-bold text-6xl">Shristi</div>
              <div className="text-fuchsia-600 font-bold text-lg mb-2">
                Shristi Shreya
              </div>
              <div>
                I am a creative Product and UX designer that enjoys making
                things simple for myself and others. The user experience, in my
                opinion, should be at the heart of any service or product. I
                love working on and conceptualizing meaningful experiences that
                involve tangible or intangible interactions in order to provide
                the most user-centric interventions.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tijori behance resume */}
      <div className="bg-white text-fuchsia-600 py-12">
        <div className="flex justify-around">
          <a href={links.tijori} className="text-3xl font-bold">
            Tijori
          </a>
          <a href={links.behance} className="text-3xl font-bold">
            Behance
          </a>
          <a href={links.resume} className="text-3xl font-bold">
            Resume
          </a>
        </div>

        <div className="m-32 mt-16">
          <Image
            src={coverImage}
            layout="responsive"
            width={200}
            height={100}
          />
        </div>

        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
