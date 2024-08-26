import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function page() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 mx-auto mt-[170px]">
      <div className="flex justify-center items-center gap-2 mx-auto">
        <h1 className="text-xl">Development by Amirhosein Varmanli</h1>
        <a href="https://github.com/Varmanli">
          <FaGithub className="text-[30px]" />
        </a>
      </div>
      <Link href={"/"}>
        <Button>back to Homepage</Button>
      </Link>
    </section>
  );
}

export default page;
