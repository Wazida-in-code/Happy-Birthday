import Image from "next/image";
import { MemoType } from "../types/MemType";

interface CardProps{
    card: MemoType
}

const MemoCard = ({card}: CardProps) => {
    console.log(card.memoryName);
    return (
        <main>
            <div className="border border-white border-2 mb-10 mt-7 rounded-2xl bg-amber-50 flex items-center text-center flex-col hover:border-4 hover:border-pink-200">
                <h2 className="text-5xl p-4 mb-2 text-purple-950 bg-blue-100 mt-10 rounded-2xl border border-2 border-blue-950 mb-7">{card.memoryName}</h2>
                <Image src={card.image} width={1200} height={0} alt="img" className="w-[330px] h-[470px] mb-3 border border-blue-950 border-2 rounded-md"></Image>
                <button className="bg-purple-950 mb-4 text-xl text-purple-200 hover:text-purple-800 hover:bg-purple-100 px-10 py-3 rounded-full hover:border hover:border-blue-600 cursor-pointer translate-1 transition-all duration-250">Details</button>
            </div>
        </main>
    );
};

export default MemoCard;