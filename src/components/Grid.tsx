import React from 'react';
import Node from './Node';
import './components.css';
import { NodeGrid } from '../ts/interfaces.ts';

export const Grid: React.FC = ({ gridInfo }: NodeGrid) => {

  return (
    <div className="grid">
      {gridInfo.map((y: NodeGrid) =>
      (
        y.map(nde => {
          return <Node
            isStart={nde.isStart}
            isEnd={nde.isEnd}
            isPath={nde.isPath}
            key={`${nde.x}-${nde.y}`} />
        })
      )
      )}
    </div>
  )
}

export default Grid;
