import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "../components/Footer";
import ContactMe from "../components/ContactMe";

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
              <Image
                src="/assets/images/phoen.webp"
                width={321}
                height={460}
                alt="srishti"
              />
            </div>
            <div className="basis-3/5">
              <div className="text-fuchsia-600 font-bold text-xl ">I'm</div>
              <div className="text-fuchsia-600 font-bold text-6xl">Shristi</div>
              <div className="text-fuchsia-600 font-bold text-lg">
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
          <div className="text-3xl font-bold">Tijori</div>
          <div className="text-3xl font-bold">Behance</div>
          <div className="text-3xl font-bold">Resume</div>
        </div>
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
