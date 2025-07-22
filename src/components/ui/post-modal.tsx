"use client";

import { motion, AnimatePresence } from "framer-motion";

type Post = {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  author: string;
  intro: string;
  content: string;
  conclusion: string;
};

export default function PostModal({
  post,
  onClose,
}: {
  post: Post | null;
  onClose: () => void;
}) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#111] text-white rounded-2xl p-6 md:p-10 max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 text-2xl"
          >
            ×
          </button>

          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg mb-6 w-full object-cover h-64"
          />
          <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
          <div className="text-sm text-gray-500 mb-4">
            <span>{post.date}</span> ·<span>By {post.author}</span>
          </div>

          <section className="space-y-6 text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            <p>
              <strong>Intro:</strong> {post.intro}
            </p>
            <p>
              <strong>Main:</strong> {post.content}
            </p>
            <p>
              <strong>Conclusion:</strong> {post.conclusion}
            </p>
          </section>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
