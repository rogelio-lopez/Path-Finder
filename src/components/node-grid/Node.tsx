import React from 'react';

interface NodeProp {
  nodeInfo: {
    isStart: boolean;
    isEnd: boolean;
    previous: object | null;
    next: object | null;
    pointX: number;
    pointY: number;
    coordinate: string;
  };
}

const Node: React.FC<NodeProp> = ({ nodeInfo }) => {

  return (
    // id = point
    <div id={nodeInfo.coordinate} className="node">
    </div>
  )
}

//errors everywhere
export default Node;
