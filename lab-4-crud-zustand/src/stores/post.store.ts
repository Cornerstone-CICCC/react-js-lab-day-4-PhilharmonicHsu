import { create } from 'zustand'
import type { Post } from '../types/post'

interface PostStore {
    posts: Post[]
    getPost: (postId: string) => Post
    addPost: (post: Post) => void
    editPost: (editedPost: Post) => void
    deletePost: (postId: string) => void
}

export const usePostStore = create<PostStore>((set, get) => ({
    posts: [],
    getPost: (postId: string) => get().posts.find(post => post.id === postId)!,
    addPost: (post: Post) => set((state) => ({posts: [...state.posts, post]})),
    editPost: (editedPost: Post) => set((state) => ({
        posts: state.posts.map(
            post => post.id === editedPost.id
                ? {...post, ...editedPost} 
                : post
        )
    })),
    deletePost: (postId: string) => set((state) => ({
        posts: state.posts.filter(post => post.id != postId)
    }))
}))