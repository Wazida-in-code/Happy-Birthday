import Image from "next/image";
import logo from '@/app/assets/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-black h-20">
            <div>
                <Image src={logo} width={60} height={60} alt="logo"></Image>
            </div>
        </nav>
    );
};

export default Navbar;