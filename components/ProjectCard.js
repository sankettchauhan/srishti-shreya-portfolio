import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectCard({
  inverted,
  title,
  description,
  image,
  bgcolor,
}) {
  const router = useRouter();

  const handleClick = (title) => router.push(`/project/${title}`);

  return (
    <div className="flex mx-32 mb-8">
      {/* content */}
      <div
        style={{ backgroundColor: bgcolor }}
        className={`my-16 p-12 flex-1 flex ${
          inverted ? "pl-24 order-2" : "pr-24"
        } cursor-pointer`}
        onClick={() => handleClick(title)}
      >
        <div className="mt-auto">
          <h1 className="text-3xl mb-6 uppercase">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      {/* image */}
      <div className={`${inverted ? "-mr-24" : "-ml-24"} flex-1`}>
        <Image src={image} width={321} height={460} alt={title} />
      </div>
    </div>
  );
}
