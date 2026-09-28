import Image from "next/image";
import logo from '@/app/assets/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-black h-20 pt-2">
            <div className="w-11/12 mx-auto">
                <div >
                    <Image src={logo} width={60} height={60} alt="logo"></Image>
                    <p></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;