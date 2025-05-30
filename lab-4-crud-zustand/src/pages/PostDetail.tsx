import { useParams, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import type { Post } from "../types/post";

export default function BlogDetail() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const getPost = usePostStore((state) => state.getPost)
    const post: Post = getPost(postId!)

    return <>
        <h1>Blog Detail</h1>
        <p>Title: {post.title}</p>
        <p>Contect: {post.content}</p>
        <p>Published: {post.published ? 'Published' : 'Not Published Yet'} </p>
        <div className="flex gap-4">
            <button 
                className="text-white bg-gray-800 rounded-md px-4 py-2 cursor-pointer"
                onClick={() => navigate(-1)}
            >
                Back To List
            </button>
            <button onClick={() => navigate(`/blog/edit/${postId}`)}>Edit</button>
        </div>
    </>
}