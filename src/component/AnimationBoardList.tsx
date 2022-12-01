import React, { useState, useLayoutEffect, useEffect } from "react";
import usePrevious from "./hooks/usePrevious";
import calculatePostion from "./utils/calculatePostion";

interface AnimationBoardListProps {
  children: any;
}

const AnimationBoardList = ({ children }: AnimationBoardListProps) => {
  const [boundingBox, setBoundingBox] = useState<any>({});
  const [prevBoundingBox, setPrevBoundingBox] = useState<any>({});
  const prevChildren = usePrevious(children);

  // used to get current position of children
  useLayoutEffect(() => {
    const newBoundingBox = calculatePostion(children);
    setBoundingBox(newBoundingBox);

  }, [children]);

  // used to get previous position of children
  useLayoutEffect(() => {
    const prevBoundingBox = calculatePostion(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

    if (hasPrevBoundingBox) {
      // Traverse through each element to make animation frame from previous position to current position
      React.Children.forEach(children, (child:any) => {
        const domNode = child.ref.current;
        const firstBox = prevBoundingBox[child.key];
        const lastBox = boundingBox[child.key];
        const changeInY = firstBox.top - lastBox.top;

        if (changeInY) {
          //Animation 
          requestAnimationFrame(() => {
            // set for transition
            domNode.style.transform = `translateY(${changeInY}px)`;
            domNode.style.transition = "transform 0s";

            requestAnimationFrame(() => {
              // Clear transition
              domNode.style.transform = "";
              domNode.style.transition = "transform 500ms";
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
};

export default AnimationBoardList;
