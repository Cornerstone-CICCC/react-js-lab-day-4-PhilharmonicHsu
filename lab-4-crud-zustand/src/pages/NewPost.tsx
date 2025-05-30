import {v4 as uuid} from 'uuid'
import { usePostStore } from '../stores/post.store';
import { useNavigate } from 'react-router-dom';
import { useState, type ChangeEvent } from 'react';
import type { Post } from '../types/post';
import toast from 'react-hot-toast';

export default function NewPost() {
    const addPost = usePostStore((state) => state.addPost)
    const navigate = useNavigate()
    
    const [post, setPost] = useState<Post>({
        id: uuid(),
        title: '',
        content: '',
        published: false
    });

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

    const handleAdd = () => {
        addPost(post)
        toast.success('Added successfully')
        navigate(-1)
    }


    return <div className='p-4'>
        <h1 className='text-4xl'>New Blog</h1>
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
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    </div>
}