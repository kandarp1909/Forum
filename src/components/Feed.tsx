import React, { useEffect, useState } from 'react'
import Editor from './Editor'
import PostCard from './PostCard'
import Modal from './Modal'
import AuthForm from './AuthForm'
import { isAuthenticated, getUser } from '../lib/auth'
import { motion } from 'framer-motion'

export default function Feed({ isAuthed, onAuthChange }:{ isAuthed:boolean, onAuthChange:()=>void }){
  const [posts, setPosts] = useState<any[]>(()=>{
    const raw = localStorage.getItem('mini_posts')
    return raw ? JSON.parse(raw) : [
      { id:1, author: 'Theresa Webb', content: 'Loving the new design! ✨' },
      { id:2, author: 'John Doe', content: 'This is a sample post to show the layout.' }
    ]
  })
  const [showAuth,setShowAuth] = useState(false)

  useEffect(()=>{
    localStorage.setItem('mini_posts', JSON.stringify(posts))
  },[posts])

  const requireAuth = () => {
    if (!isAuthenticated()){
      setShowAuth(true)
      return false
    }
    return true
  }

  const handlePublish = (text:string) => {
    const user = getUser()
    const newPost = { id: Date.now(), author: user?.name || 'You', content: text }
    setPosts(p=>[newPost,...p])
  }

  return (
    <div>
      <Editor onPublish={handlePublish} requireAuth={requireAuth} />
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: { opacity: 0, y: 6 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
      }}>
        {posts.map(p=> <motion.div key={p.id} className="mb-2" initial={{opacity:0, y:6}} animate={{opacity:1, y:0}}><PostCard post={p} /></motion.div>)}
      </motion.div>

      <Modal open={showAuth} onClose={()=>setShowAuth(false)}>
        <AuthForm onSuccess={()=>{ setShowAuth(false); onAuthChange() }} />
      </Modal>
    </div>
  )
}
