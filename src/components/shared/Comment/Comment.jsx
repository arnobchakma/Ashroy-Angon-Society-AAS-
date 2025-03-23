import React from "react";
import "../../../style/comment.css";

const Comment = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="comment_section">
      <div className="container">
        <div className="comment_wrapper">
          <h2>Add Comment</h2>
          <form onSubmit={sendEmail}>
            <div class="mx-auto">
              <div className="name_email_wrapper">
                <div className="input-form">
                  <input
                    type="text"
                    className="w-full h-13 p-3 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                    placeholder="Your name"
                    name="full-name"
                    required
                  />
                </div>

                <div className="input-form">
                  <input
                    type="email"
                    className="w-full h-13 p-3 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                    placeholder="Your email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="input-form py-4">
                <input
                  type="text"
                  className="w-full h-13 p-3 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                  placeholder="Your website"
                  name="website"
                  required
                />
              </div>

              <div className="text-area">
                <textarea
                  className="w-full p-3 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1"
                  rows="8"
                  placeholder="Write your comment"
                  name="Message"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button type="submit" className="button">
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
