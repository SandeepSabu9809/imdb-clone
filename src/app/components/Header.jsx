import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">

      <div className="flex gap-4 items-center">
        <MenuItem title='home' address='/' Icon={IoMdHome} />
        <MenuItem title='about' address='/about' Icon={FaCircleInfo} />
      </div>

      <div className=" flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className=" bg-amber-500 font-bold py-1 px-2 rounded-lg">IMDB</span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
      

    </div>
  )
}
