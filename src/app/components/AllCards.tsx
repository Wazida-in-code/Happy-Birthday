import { MemoType } from "../types/MemType";
import MemoCard from "./MemoCard";

interface CardsProps{
    cards: MemoType[];
};

const AllCards = ({cards}: CardsProps) => {
    console.log(cards);
    return (
        <main>
            <div>
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