import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function DrawCircles() {
  const [redoStack, setRedoStack] = useState([]);
  const [circles, setCircles] = useState([]);
  const drawingRef = useRef(null);

  const handleDraw = (e) => {
    // getBoundingClientRect() it provides property of rectangle left, top, right, bottom, x, y, width, and height
    const rect = drawingRef.current.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    setCircles((pre) => [...pre, { x: x, y: y }]);
    setRedoStack([]);
  };

  const handleUndo = () => {
    setCircles((pre) => {
      setRedoStack((r) => {
        if (pre.length < 1) return r;
        return [...r, pre[pre.length - 1]];
      });

      return pre.slice(0, -1);
    });
  };

  const handleRedo = () => {
    setCircles((pre) => {
      if (redoStack.length < 1) return pre;
      let reAddCircle = redoStack[redoStack.length - 1];
      setRedoStack((s) => s.slice(0, -1));
      return [...pre, reAddCircle];
    });
  };

  return (
    <div className="circle-drawer">
      <div
        ref={drawingRef}
        data-testid="drawing-area"
        className="drawing-area"
        onClick={handleDraw}
      >
        {circles.map((circle, i) => {
          return (
            <div
              data-testid="circle"
              key={i}
              className="circle"
              style={{ left: circle.x, top: circle.y }}
            ></div>
          );
        })}
      </div>
      <div className="buttons">
        <button className="undo-btn" onClick={handleUndo}>
          Undo
        </button>
        <button className="redo-btn" onClick={handleRedo}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default DrawCircles;
