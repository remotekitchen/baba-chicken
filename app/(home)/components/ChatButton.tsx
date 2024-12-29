"use client"

import { MessageSquare } from 'lucide-react'
import { motion } from "framer-motion"

export function ChatButton() {
    return (
        <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-50 bg-red-600 text-white p-4 rounded-full shadow-lg"
            onClick={() => window.open('mailto:contact@babas.com')}
            aria-label="Chat with us"
        >
            <MessageSquare className="w-6 h-6" />
        </motion.button>
    )
}

