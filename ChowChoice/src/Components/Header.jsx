import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="bg-red-700 py-[12px] px-[10px] sm:px-[6px] sm:py-[5px] text-center text-white font-bold rounded-sm sm:text-[25px] tracking-wider"
      >
        ChowChoice
      </Link>
      <div className="flex items-center gap-1  sm:gap-[20px]">
        <Link to="/signin">
          <Button gradientDuoTone="pinkToOrange" outline>
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button outline gradientDuoTone="purpleToPink">
            Sign Up
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
