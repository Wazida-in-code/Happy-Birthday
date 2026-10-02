import { MemoType } from "../types/MemType";
import MemoCard from "./MemoCard";

interface CardsProps{
    cards: MemoType[];
};

const AllCards = ({cards}: CardsProps) => {
    console.log(cards);
    return (
        <main>
            <div className="grid lg:grid-cols-2 w-11/12 mx-auto gap-8 grid-cols-1">
                {
                    cards.map((card: MemoType) => {
                        return <MemoCard key={card.id} card={card} />
                    })
                }
            </div>
        </main>
    );
};

export default AllCards;