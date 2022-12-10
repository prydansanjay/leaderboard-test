import { createRef, useEffect, useState } from "react";
import LeaderBoardData from "../data/LeaderBoardData";
import AnimationBoardList from "./AnimationBoardList";
import BoardListItem from "./BoardListItem";

export default function LeaderBoard() {
  const [boardData, setBoardData] = useState(LeaderBoardData);
  
  useEffect(() => {
    setTimeout(()=>{
        reorder();
    }, 6000) 
  }, []);

  const reorder = () => {    
    let reOrderedData = boardData
      .map((item) => {
        item.prevScore = item.score; 
        item.score = Math.floor(Math.random() * 1500);
        return item;
      })
      .sort((item1, item2) => item2.score - item1.score);
    setBoardData(reOrderedData);

    setTimeout(()=>{
        reorder();
    }, 6000)
  };
  return (
    <div className="list-wrapper">
      <div className="leadboard-list">
        <AnimationBoardList>
          {boardData.map((item, index) => {
            return (
              <BoardListItem
                key={item.userID}
                index={(index + 1).toString()}
                displayName={item.displayName}
                userID={item.userID}
                prevScore={item.prevScore}
                score={item.score}
                ref={createRef()}
              ></BoardListItem>
            );
          })}
        </AnimationBoardList>
      </div>
    </div>
  );
}
