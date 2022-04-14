import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="border-b-2 border-fuchsia-600">
      <div className="w-full flex justify-center">
        <a
          className={`mx-3 mt-6 mb-5 cursor-pointer ${
            router.pathname === "/" && "text-fuchsia-600"
          }`}
          onClick={() => router.push("/")}
        >
          Projects
        </a>
        <div className="mx-3 mt-6 mb-5">|</div>
        <a
          className={`mx-3 mt-6 mb-5 cursor-pointer ${
            router.pathname === "/about" && "text-fuchsia-600"
          }`}
          onClick={() => router.push("/about")}
        >
          About Me
        </a>
      </div>
    </nav>
  );
}
