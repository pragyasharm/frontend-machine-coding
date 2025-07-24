import React, { useState } from "react";
import "./Reddit.css";

const RedditComment = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState([]);
  const onComment = () => {
    const newComment = {
      id: Date.now(),
      label: commentText,
      replies: [],
    };

    setComments((pre) => {
      const commentList = [newComment, ...pre];

      return commentList;
    });
    setCommentText("");
  };

  return (
    <div className="reddit">
      <h2 style={{ fontSize: "36px", margin: "14px" }}>RedditComment</h2>
      <input
        style={{ marginLeft: "10px", width: "400px" }}
        type="text"
        placeholder="What are your thoughts"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button style={{ marginLeft: "10px" }} onClick={onComment}>
        Comment
      </button>
      <div style={{ margin: "10px", width: "800px", padding: "10px" }}>
        {comments &&
          comments.map((item) => (
            <CommentItem key={item.id} item={item} setComments={setComments} />
          ))}
      </div>
    </div>
  );
};

const addReplyToComment = (items, newComment, parentId) => {
  return items.map((item) => {
    if (item.id == parentId) {
      return { ...item, replies: [newComment, ...(item.replies || [])] };
    }
    if (item.replies) {
      return {
        ...item,
        replies: addReplyToComment(item.replies, newComment, parentId),
      };
    }
    return item;
  });
};

// Helper to recursively update a comment's label
const updateCommentLabel = (comments, id, newLabel) => {
  return comments.map((item) => {
    if (item.id == id) {
      return { ...item, label: newLabel };
    }
    if (item.replies) {
      return {
        ...item,
        replies: updateCommentLabel(item.replies, id, newLabel),
      };
    }
    return item;
  });
};

const CommentItem = ({ item, setComments }) => {
  const [replyBox, setReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [editFlag, setEditFlag] = useState(false);
  const [editText, setEditText] = useState(item.label);

  const addReply = (parentId) => {
    let newComment = {
      id: Date.now(),
      label: replyText,
      replies: [],
    };
    setComments((pre) => addReplyToComment(pre, newComment, parentId));
    setReplyText("");
    setReplyBox(false);
  };

  const handleEdit = (id, text) => {
    setComments((prev) => updateCommentLabel(prev, id, text));
    setEditFlag(false);
    setEditText("");
  };

  const handleDelete = (id) => {
    setComments((pre) => {
      const filterComments = (comments, id) => {
        return comments
          .filter((item) => item.id !== id)
          .map((item) =>
            item.replies
              ? { ...item, replies: filterComments(item.replies, id) }
              : item
          );
      };

      const newList = filterComments(pre, id);
      return newList;
    });
  };
  return (
    <div
      style={{
        paddingLeft: "15px",
        border: "1px solid black",
        marginBottom: "4px",
      }}
    >
      <div style={{}}>
        {editFlag ? (
          <div>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={() => setEditFlag(false)}>Cancel</button>
            <button onClick={() => handleEdit(item.id, editText)}>Done</button>
          </div>
        ) : (
          item.label
        )}
      </div>
      <button onClick={() => setEditFlag(true)}>Edit</button>
      <button onClick={() => setReplyBox(true)}>Reply</button>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
      {replyBox && (
        <div>
          <input
            type="text"
            onChange={(e) => setReplyText(e.target.value)}
            value={replyText}
          />
          <button onClick={() => setReplyBox(false)}>Cancel</button>
          <button onClick={() => addReply(item.id)}>Comment</button>
        </div>
      )}
      {item.replies &&
        item.replies.map((reply) => (
          <CommentItem key={reply.id} item={reply} setComments={setComments} />
        ))}
    </div>
  );
};

export default RedditComment;
