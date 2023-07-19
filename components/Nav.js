import WHlogo from "../public/WHlogo.png";
import Image from "next/image";
import WHNav from "../public/WHNav.png";
import Link from "next/link";

export default function Nav() {
  return (
    <main>
      {/* <div className="flex h-[80px]">
        <div className="absolute top-0 left-10 inline-block">
          <Image src={WHlogo} width={80} height={80} alt={"Weather Hub Logo"} />
        </div>
        <div className="flex items-center mx-auto">
          <h1 className="text-blue-400 text-6xl text-center w-full">
            Weather<span className="text-zinc-700">/</span>
            <span className="text-red-400">Hub</span>
          </h1>
        </div>
      </div> */}
      <div className="flex justify-center">
        <Link href="/">
          <Image src={WHNav} alt={"Weather Hub Logo"} />
        </Link>
      </div>
    </main>
  );
}
