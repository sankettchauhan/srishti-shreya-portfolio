import { knowLinks, missLinks } from "../content/footer";

export default function Footer() {
  return (
    <div className="bg-black">
      <h1 className="flex justify-center pt-16 text-2xl mb-4">
        Got a design project?
      </h1>
      <h2 className="flex justify-center mb-16">
        e-mail : shreyashristi08@gmail.com
      </h2>
      <div className="flex justify-around w-full mb-16">
        <div>
          <h1 className="border-b-2 border-fuchsia-600 mb-4">
            You can&apos;t miss me here
          </h1>
          <div className="flex">
            {missLinks.map(({ link, icon }) => (
              <a
                key={link}
                className="bg-white rounded-full p-1 mr-4"
                href={link}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h1 className="border-b-2 border-fuchsia-600 mb-4">
            Know more about me
          </h1>
          <div className="flex">
            {knowLinks.map(({ link, icon }) => (
              <a
                key={link}
                className="bg-white rounded-full p-1 mr-4"
                href={link}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-around border-t-2 border-fuchsia-600 py-6">
        <div>Shristi Shreya 2021-2022</div>
        <div>All rights reserved @shreyashristi</div>
        <div>shreyashristi08@gmail.com</div>
      </div>
    </div>
  );
}
