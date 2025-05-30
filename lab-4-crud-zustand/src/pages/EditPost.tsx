import { useParams, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import type { Post } from "../types/post";
import { useState, type ChangeEvent } from "react";
import toast from "react-hot-toast";

export default function EditPost() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const getPost = usePostStore((state) => state.getPost)
    const editPost = usePostStore((state) => state.editPost)
    const [post, setPost] = useState<Post>(getPost(postId!))

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setPost(prevState => ({
            ...prevState,
            [name]: value
        }))
    }    

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target

        setPost(prevState => {
            return {
                ...prevState,
                published: checked
            }
        })
    }

    const handleEdit = () => {
        editPost(post)
        toast.success('Edit successfully!')
        navigate(-1)
    }

    return <div className='flex-1 p-4'>
        <h1 className='text-4xl'>Edit Post</h1>
        <br />
        <div className='flex flex-col gap-4'>
            <div className='flex w-full items-center gap-4'>
                <label className='w-40' htmlFor='title'>Title:</label>
                <input 
                    className='border-1 p-1 flex-1' 
                    type="text" 
                    id="title" 
                    name='title' 
                    value={post.title} 
                    onChange={handleChange}
                />
            </div>
            <div className='flex w-full items-start gap-4'>
                <label className='w-40' htmlFor='content'>Context:</label>
                <textarea 
                    className='border-1 p-1 flex-1' 
                    id="context" 
                    name='content' 
                    value={post.content} 
                    onChange={handleChange}
                />
            </div>
            <div className='flex w-full items-center gap-4'>
                <label className='w-40' htmlFor='published'>Published:</label>
                <input 
                    type="checkbox" 
                    name='published' 
                    checked={post.published} 
                    onChange={handleCheckboxChange}
                />
            </div>
        </div>
        <div className='flex justify-end'>
            <button 
                className='bg-gray-800 px-4 py-2 text-white cursor-pointer'
                onClick={handleEdit}
            >
                Submit 
            </button>
        </div>
    </div>
}