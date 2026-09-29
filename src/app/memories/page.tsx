import AllCards from "../components/AllCards";
import { MemoType } from "../types/MemType";


const MemoriesPage = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const cards = await res.json();
    console.log(cards);
    return (
        <div className='min-h-screen text-center bg-blue-950 text-white'>
            <div className="w-11-12 mx-auto">
                <h1 className="text-8xl mt-20 bg-mauve-300 text-black font-bold">~Our Beautiful Memories~</h1>

                <p className="mt-17 text-2xl">Can You Remember, Our Every Memoriable Days?</p>
                <p className="mt-15 text-6xl text-cyan-400">Little Descripion of our 
                    <span className="text-amber-500"> times</span>
                </p>
            </div>
            {
                <AllCards cards={cards} />
            }
        </div>
    );
};

export default MemoriesPage;