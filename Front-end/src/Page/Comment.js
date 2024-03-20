import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ReplyIcon from '@mui/icons-material/Reply';

function Detail({ discussion_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/discussions/${discussion_id}/comments`);
        setComments(response.data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }

    fetchComments();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'5%',padding:'1%',marginBottom:'1%' }}>
    {comments.map((comment) => (
      <div key={comment.id} className="comment-item" style={{ display: 'flex', alignItems: 'center', borderLeft: '4px solid #D0D0D0   ', paddingLeft: '8px' }}>
        <p style={{ color: 'red', fontSize: '1.1em', marginRight: '8px' }}>{comment.user.name + ':'}</p>
        <p style={{ color: 'gray', fontSize: '1.1em' }}>{comment.content}</p>
        <div className="comment-info" style={{ marginLeft: '10px' }}>
          <span>
            <ThumbUpAltIcon style={{ fontSize: '18px', marginRight: '4px' }} />
            {comment.likes} Likes
          </span>
          <span style={{ marginLeft: '10px' }}>
            <ReplyIcon style={{ fontSize: '18px', marginRight: '4px' }} />
            {comment.replies_count} Replies
          </span>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Detail;