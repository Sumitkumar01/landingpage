import Link from "next/link";
import Container from "./Container";
import { IoIosCall } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
const Navbar = () => {
  return (
    <header>
      <Container>
        <nav className="flex justify-between items-center py-6">
          <div>logo</div>
          <div className="flex items-center gap-4 text-base">
            <Link href="href" className="flex items-center gap-1">
              <span className="">
                <IoIosCall size={20} />
              </span>
              +234 123 456 7890
            </Link>
            <Link href="href" className="flex items-center gap-1">
              <span>
                <SiMinutemailer size={20} />
              </span>
              <span>WmF8B@example.com</span>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
