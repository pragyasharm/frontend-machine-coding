import React, { useState } from "react";
import "./kanbanBoard.css"; // ← new CSS file

const KanbanBoard = () => {
  const [board, setBoard] = useState({
    todo: [],
    inProgress: [],
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
  const [editItemId, setEditItemId] = useState(null);
  const [editInput, setEditInput] = useState(null);
  const [dragging, setDragging] = useState(null);
  const [activeDropZone, setActiveDropZone] = useState(null);

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

  const handleEditTaskClick = (task) => {
    setEditItemId(task.id);
    setEditInput(task.text);
  };
  const handleEditTaskInline = (columnId) => {
    setBoard((pre) => ({
      ...pre,
      [columnId]: pre[columnId].map((c) => {
        if (c.id == editItemId) return { ...c, text: editInput };
        return c;
      }),
    }));
    setEditItemId(null);
    setEditInput("");
  };

  const onDragStart = (currentTask, fromColumn, fromIndex) => {
    setDragging({ currentTask, fromColumn, fromIndex });
  };

  const handleTaskDrop = (toColumn, toIndex) => {
    if (!toColumn) return;
    console.log(
      "from",
      dragging.fromColumn,
      dragging.fromIndex,
      "to",
      toColumn,
      toIndex
    );
    setBoard((pre) => {
      if (dragging.fromColumn == toColumn) {
        const tasks = [...pre[dragging.fromColumn]];
        const filtered = tasks.filter(
          (_, index) => index != dragging.fromIndex
        );
        const reordered = [
          ...filtered.slice(0, toIndex),
          dragging.currentTask,
          ...filtered.slice(toIndex),
        ];
        return { ...pre, [toColumn]: reordered };
      }
      const fromTasks = [...pre[dragging.fromColumn]].filter(
        (_, index) => index != dragging.fromIndex
      );
      const toTasks = [
        ...pre[toColumn].slice(0, toIndex),
        dragging.currentTask,
        ...pre[toColumn].slice(toIndex),
      ];
      return { ...pre, [dragging.fromColumn]: fromTasks, [toColumn]: toTasks };
    });
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <div className="kanban-board">
      <h2>Kanban Board</h2>
      <div className="board-columns">
        {Object.entries(board).map(([columnId, tasks]) => (
          <div key={columnId} className="board-column">
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
              {tasks.map((task, index) => (
                <React.Fragment key={task.id}>
                  <div
                    className={`drop-zone ${
                      activeDropZone === `${columnId}-${index}` ? "active" : ""
                    }`}
                    onDragOver={onDragOver}
                    onDrop={() => {
                      handleTaskDrop(columnId, index);
                      setActiveDropZone(null);
                    }}
                    onDragEnter={() =>
                      setActiveDropZone(`${columnId}-${index}`)
                    }
                    onDragLeave={() => setActiveDropZone(null)}
                  ></div>
                  <div
                    className="task-card"
                    draggable
                    onDragStart={() => onDragStart(task, columnId, index)}
                  >
                    {editItemId === task.id ? (
                      <div className="edit-card">
                        <input
                          type="text"
                          value={editInput}
                          onChange={(e) => setEditInput(e.target.value)}
                          className="edit-input"
                        />
                        <div className="edit-actions">
                          <button
                            onClick={() => handleEditTaskInline(columnId)}
                          >
                            ✅
                          </button>
                          <button onClick={() => setEditItemId(null)}>
                            ❌
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="task-content">
                        <span>{task.text}</span>
                        <div>
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
                          <span
                            onClick={() => handleEditTaskClick(task)}
                            className="edit-icon"
                            style={{ marginLeft: "10px" }}
                          >
                            ✍🏻
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
              <div
                className={`drop-zone end ${
                  activeDropZone === `${columnId}-${tasks.length}`
                    ? "active"
                    : ""
                }`}
                onDragOver={onDragOver}
                onDragEnter={() =>
                  setActiveDropZone(`${columnId}-${tasks.length}`)
                }
                onDragLeave={() => setActiveDropZone(null)}
                onDrop={() => {
                  handleTaskDrop(columnId, tasks.length);
                  setActiveDropZone(null);
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
