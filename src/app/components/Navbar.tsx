import Image from "next/image";
import logo from '@/app/assets/logo.png'
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-black h-20 pt-2">
            <div className="flex justify-between items-center w-11/12 mx-auto">
                <div className="flex gap-3 items-center">
                    <Image src={logo} width={60} height={60} alt="logo"></Image>
                    <p className="font-bold text-pink-400 text-2xl">Happy Birthday, My Pretty Girl</p>
                </div>

                <div className="flex gap-4 items-center pb-3">
                    <Link href="/memories" className="text-xl text-purple-300 hover:text-purple-800 hover:bg-purple-100 p-2 rounded-full hover:border hover:border-blue-600 cursor-pointer translate-1 transition-all duration-250">Memories</Link>
                    <Link href="/memories" className="text-xl text-purple-300 hover:text-purple-800 hover:bg-purple-100 p-2 rounded-full hover:border hover:border-blue-600 cursor-pointer translate-1 transition-all duration-250">Memories</Link>
                    <Link href="/memories" className="text-xl text-purple-300 hover:text-purple-800 hover:bg-purple-100 p-2 rounded-full hover:border hover:border-blue-600 cursor-pointer translate-1 transition-all duration-250">Memories</Link>
                </div>                
            </div>
        </nav>
    );
};

export default Navbar;