import React, { useState } from 'react'

export default function Editor({ onPublish, requireAuth }:{ onPublish:(text:string)=>void, requireAuth:()=>boolean }){
  const [text, setText] = useState('')
  const handleOther = () => alert('function not implemented')

  const publish = () => {
    if (!requireAuth()) return
    if (!text.trim()) return alert('Write something to publish')
    onPublish(text.trim())
    setText('')
  }

  return (
    <div className="card p-4 rounded-xl2 mb-6">
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center">U</div>
        <div className="flex-1">
          <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Share something..." className="w-full bg-transparent border border-white/6 rounded p-3 min-h-[82px] resize-none" />
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2">
              <button onClick={handleOther} className="px-2 py-1 rounded-md bg-white/6">B</button>
              <button onClick={handleOther} className="px-2 py-1 rounded-md bg-white/6">I</button>
              <button onClick={handleOther} className="px-2 py-1 rounded-md bg-white/6">U</button>
            </div>
            <div>
              <button onClick={publish} className="px-4 py-2 rounded-md bg-[#5B6CFF]">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
