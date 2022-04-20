import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export const missLinks = [
  {
    link: "https://www.behance.net",
    icon: <AiOutlineBehance className="text-4xl text-black" />,
  },
  {
    link: "https://www.instagram.com/_.tijori._/?hl=en",
    icon: <AiOutlineInstagram className="text-4xl text-black" />,
  },
];

export const knowLinks = [
  {
    link: "https://facebook.com",
    icon: <BsFacebook className="text-4xl text-black" />,
  },
  {
    link: "https://linkedin.com",
    icon: <GrLinkedinOption className="text-4xl text-black" />,
  },
  {
    link: "https://whatsapp.com",
    icon: <BsWhatsapp className="text-4xl text-black" />,
  },
];
