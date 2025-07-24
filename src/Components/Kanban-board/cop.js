import React, { useState } from "react";
import "./kanbanBoard.css"; // ← new CSS file

const KanbanBoard = () => {
  const [board, setBoard] = useState({
    todo: [
      { id: 1, text: "Create UI" },
      { id: 3, text: "correct the posture" },
    ],
    inProgress: [{ id: 2, text: "Design page" }],
    done: [],
  });
  const [newTasks, setNewTasks] = useState({
    todo: "",
    inProgress: "",
    done: "",
  });
  const [inputVisible, setInputVisible] = useState({
    todo: false,
    inProgress: false,
    done: false,
  });
  const [dragging, setDragging] = useState(null);

  const handleAddTask = (columnId) => {
    const addedTask = {
      id: Date.now(),
      text: newTasks[columnId],
    };
    setBoard((pre) => ({
      ...pre,
      [columnId]: [...pre[columnId], addedTask],
    }));
    setNewTasks((pre) => ({ ...pre, [columnId]: "" }));
    setInputVisible((pre) => ({ ...pre, [columnId]: false }));
  };

  const onDragStart = (currentTask, currentColumnId) => {
    setDragging({ currentTask, currentColumnId });
  };

  const onDrop = (target) => {
    if (!target || target === dragging.currentColumnId) return;

    setBoard((pre) => {
      const sourceItems = pre[dragging.currentColumnId].filter(
        (item) => item.id !== dragging.currentTask.id
      );
      const targetItems = [...pre[target], dragging.currentTask];
      return {
        ...pre,
        [target]: targetItems,
        [dragging.currentColumnId]: sourceItems,
      };
    });
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <div className="kanban-board">
      <h2>Kanban Board</h2>
      <div className="board-columns">
        {Object.entries(board).map(([columnId, tasks]) => (
          <div
            key={columnId}
            className="board-column"
            onDragOver={onDragOver}
            onDrop={() => onDrop(columnId)}
          >
            <h3 className="column-header">{columnId}</h3>

            {inputVisible[columnId] ? (
              <div className="task-input-area">
                <input
                  type="text"
                  value={newTasks[columnId]}
                  onChange={(e) =>
                    setNewTasks((pre) => ({
                      ...pre,
                      [columnId]: e.target.value,
                    }))
                  }
                  placeholder="New task"
                />
                <div className="task-buttons">
                  <button
                    className="add-btn"
                    onClick={() => handleAddTask(columnId)}
                  >
                    Add
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() =>
                      setInputVisible((pre) => ({ ...pre, [columnId]: false }))
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="show-input-btn"
                onClick={() =>
                  setInputVisible((pre) => ({ ...pre, [columnId]: true }))
                }
              >
                + Add task
              </button>
            )}

            <div className="task-list">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="task-card"
                  draggable
                  onDragStart={() => onDragStart(task, columnId)}
                >
                  <div className="task-content">
                    <span>{task.text}</span>
                    <p>
                      <span
                        className="delete-icon"
                        onClick={() =>
                          setBoard((pre) => ({
                            ...pre,
                            [columnId]: pre[columnId].filter(
                              (item) => item.id !== task.id
                            ),
                          }))
                        }
                      >
                        🗑️
                      </span>
                      <span style={{ marginLeft: "10px" }}>✍🏻</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
