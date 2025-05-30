import { usePostStore } from "../stores/post.store"
import type { Post } from "../types/post"
import { useNavigate } from "react-router-dom";

export default function Blog() {
    const posts  = usePostStore((state) => state.posts)
    const navigate = useNavigate()

    return <div className="flex flex-col gap-8">
        <div className="flex gap-40">
            <h1>Blog List</h1>
            <button onClick={() => navigate('new')}>Create</button>
        </div>
        
        <ul>
            {
                posts.map((post: Post, index) => <li key={index} className="flex gap-4 justify-center items-center">
                    <div>{post.title}</div>
                    <button onClick={() => navigate(`${post.id}`)}>Detail</button>
                </li>)
            }
        </ul>
    </div>
}