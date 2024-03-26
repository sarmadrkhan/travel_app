import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5" >
      <Link href="/">
        <Image src={"/logo.png"} alt="logo" width={40} height={15} className=" rounded-full" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(link => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          label="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image className="lg:hidden inline-block cursor-pointer"
        src={"/menu.svg"} alt="menu-btn" height={24} width={24}
      />
    </nav>
  )
}

export default Navbar