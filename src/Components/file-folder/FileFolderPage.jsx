import React, { useState } from "react";
import json from "./data.json";
import "./folderStyle.css";

export const List = ({ list, handleAddFolder, handleDeleteFolder }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div className="container">
      {list &&
        list.map((node) => {
          return (
            <div key={node.id}>
              <div className="folder">
                {node.isfolder && (
                  <span
                    onClick={() =>
                      setIsExpanded((pre) => ({
                        ...pre,
                        [node.name]: !pre[node.name],
                      }))
                    }
                  >
                    {isExpanded[node.name] ? "-" : "+"}
                  </span>
                )}
                <span>{node.name}</span>
                {node.isfolder && (
                  <>
                    <img
                      onClick={() => handleAddFolder(node.id)}
                      className="icon"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s"
                    />
                    <span onClick={() => handleDeleteFolder(node.id)}>
                      delete
                    </span>
                  </>
                )}
              </div>
              {isExpanded[node.name] && node?.childern && (
                <List
                  list={node.childern}
                  handleAddFolder={handleAddFolder}
                  handleDeleteFolder={handleDeleteFolder}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

const FileFolderPage = () => {
  const [data, setData] = useState(json);

  const handleAddFolder = (parentId) => {
    const name = prompt("Enter name");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id == parentId) {
          return {
            ...node,
            childern: [
              ...node.childern,
              { id: Date.now(), name: name, isfolder: true, childern: [] },
            ],
          };
        }
        if (node.childern) {
          return { ...node, childern: updateTree(node.childern) };
        }
        return node;
      });
    };
    setData((pre) => updateTree(pre));
  };
  const handleDeleteFolder = (id) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== id)
        .map((node) => {
          if (node.childern) {
            return { ...node, childern: updateTree(node.childern) };
          }
          return node;
        });
    };

    setData((pre) => updateTree(pre));
  };
  return (
    <div>
      <h1>File-Explorer</h1>
      <List
        list={data}
        handleAddFolder={handleAddFolder}
        handleDeleteFolder={handleDeleteFolder}
      />
    </div>
  );
};

export default FileFolderPage;
