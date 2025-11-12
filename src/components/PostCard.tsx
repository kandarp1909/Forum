import React from "react";

export default function PostCard({ post }: { post: any }) {
  return (
    <>
      <div className="card p-4 border-[10px] border-[#F5F5F5] rounded-t-xl rounded-b-none">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-t-lg bg-white/6 flex items-center justify-center text-sm font-semibold">
            {post.author?.[0] || "U"}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{post.author}</div>
              <div className="text-sm text-[color:var(--muted)]">just now</div>
            </div>
            <div className="mt-2 text-[color:var(--muted)]">{post.content}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 text-sm text-[color:var(--muted)] bg-[#F5F5F5] border-[10px] border-[#F5F5F5] border-t-0 rounded-b-xl rounded-t-none">
        <button onClick={() => alert("function not implemented")}>
          ♡ Like
        </button>
        <button onClick={() => alert("function not implemented")}>
          💬 Comment
        </button>
        <button onClick={() => alert("function not implemented")}>
          ↗ Share
        </button>
      </div>
    </>
  );
}
