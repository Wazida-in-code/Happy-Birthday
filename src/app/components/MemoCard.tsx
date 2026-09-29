import { MemoType } from "../types/MemType";

interface CardProps{
    card: MemoType
}

const MemoCard = ({card}: CardProps) => {
    console.log(card.memoryName);
    return (
        <main>
            <div>
                <h2 >{card.memoryName}</h2>
            </div>
        </main>
    );
};

export default MemoCard;