import { ChangeEvent, ReactNode, useContext } from "react";
import { Button } from "./button";
import { Input } from "./input";
import Link from "next/link";

function Header({ setInputValue }: any) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }
  return (
    <header className="flex gap-9  justify-center items-center md:mr-5 mx-auto my-4 ">
      <Link href={"/"}>
        <Button className="flex gap-5">
          <p>Movie Watchlist</p>
        </Button>
      </Link>
      <form action="">
        <Input placeholder="search movie..." onChange={handleChange} />
      </form>
      <Link href={"about"}>
        <Button>About me</Button>
      </Link>
    </header>
  );
}

export default Header;
