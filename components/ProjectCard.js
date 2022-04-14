import Image from "next/image";

export default function ProjectCard({
  inverted,
  title,
  description,
  image,
  bgcolor,
}) {
  return (
    <div className="flex mx-32 mb-8">
      {/* content */}
      <div
        className={`my-16 p-12 flex-1 flex ${
          inverted ? "pl-24 order-2" : "pr-24"
        }`}
        style={{ backgroundColor: bgcolor }}
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
