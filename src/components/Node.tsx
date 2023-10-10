import React from 'react';

interface NodeProps {
  isStart: boolean;
  isEnd: boolean;
  isPath: boolean;
}

const Node: React.FC<NodeProps> = ({ isStart, isEnd, isPath }) => {

  //Use this node to controll visual stuff only

  return (
    <div className={`node ${isStart ? 'start' : isEnd ? 'end' : isPath ? 'path' : ''}`}></div>
  )
}

export default Node;
