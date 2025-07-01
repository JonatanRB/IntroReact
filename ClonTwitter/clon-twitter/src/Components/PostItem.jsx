import React from "react";

export default function PostItem({username, postText, isLike}) {
    return (
        <div>
            <h1>{username}</h1>
            <p>{postText}</p>
            <img src={isLike? "" : ""} alt="like" />
        </div>
    )
}