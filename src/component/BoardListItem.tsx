import React, { forwardRef } from "react";

interface BoardListItemProps {
    index: string;
    userID: string;
    displayName: string;
    score: number;
};

const BoardListItem = forwardRef(({ index, userID, displayName, score }: BoardListItemProps, ref: any) => (
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
                {score} <span className="gray-text">points</span>
            </div>
        </div>
    </div>
));

export const BoradListItemType = typeof BoardListItem;
export default BoardListItem;
