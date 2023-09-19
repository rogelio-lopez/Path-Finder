import React from 'react';

interface NodeProp {
  nodeInfo: {
    isStart: boolean;
    isEnd: boolean;
    isPath: boolean;
    parent: NodeProp | null;
    x: number;
    y: number;
  };
}

const Node: React.FC<NodeProp> = ({ nodeInfo }) => {



  return (
    // id = point
    <div
      id={`${nodeInfo.x}-${nodeInfo.y}`}
      className={`node ${nodeInfo.isStart ? 'start' : nodeInfo.isEnd ? 'end' : ''}`}>
    </div>
  )
}

//set css class/node status as useState so it refreshes when state changes

export default Node;
