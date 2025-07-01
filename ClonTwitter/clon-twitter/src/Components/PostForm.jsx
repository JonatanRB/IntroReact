import React, {useRef} from "react";
import "../assets/Styles/PostForm.css"

export default function PostForm(post, setPost) {
    const InputValue = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        const newPost = {
            username: "Jonatan RB",
            postText: InputValue.current.value,
            isLike: false
        }

        setPost([...post, newPost]);
        InputValue
        
    }

    return (
        <form >
            <input 
                type="text" 
                ref={InputValue}
                placeholder="Escribe sobre tu publicación"
            />
            <button onClick={(e) => handleSubmit(e)}>Publicar</button>
        </form>
    )
}