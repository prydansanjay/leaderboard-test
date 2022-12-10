import  { forwardRef } from "react";
import IncreamentalCounter from "./IncreamentalCounter";

interface BoardListItemProps {
    index: string;
    userID: string;
    displayName: string;
    prevScore: number;
    score: number;
};

const BoardListItem = forwardRef(({ index, userID, displayName, score, prevScore }: BoardListItemProps, ref: any) => {
   return (
    <div ref={ref} >
        <div className="listItem">
            <div>
                <div className="avatarBox">
                    <img src={require('../assets/images/default-user.png')} width={35} height={35} alt={displayName}/>
                    <div className="indexNumber">{index}</div>
                    <div className="name">{displayName}</div>
                </div>
            </div>
            <div>
                <IncreamentalCounter startCounter={prevScore} endCounter={score} /> <span className="gray-text">points</span>
            </div>
        </div>
    </div>
)});

export const BoradListItemType = typeof BoardListItem;
export default BoardListItem;
