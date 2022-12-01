import React from "react";
// Calculate position of each children and return array of positions based on children Key
const calculatePosition = (children: Object | undefined) => {
  const boundingBoxes: any = {};

  React.Children.forEach(children, (child: any) => {
    const domNode = child?.ref?.current;
    const nodeBoundingBox = domNode.getBoundingClientRect();

    boundingBoxes[child.key] = nodeBoundingBox;
  });

  return boundingBoxes;
};

export default calculatePosition;
