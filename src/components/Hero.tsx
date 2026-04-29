import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center w-full">
      {/* 渐变边框头像 */}
      <motion.div
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative mb-5"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-[#81C784] to-[#A5D6A7] p-[6px] shadow-lg shadow-green-200/50"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
            <img
              src="https://qiniu.ylovexln.top/blog/avatar.jpg-small"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 昵称与格言 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        {/* 昵称 */}
        <h1 className="text-5xl font-bold text-[#2D3A2D] dark:text-[#E8F5E9] tracking-tight">
          YlovexLN | 竹顾渊丶
        </h1>

        {/* 引用块格言 */}
        <div className="flex items-center gap-4 px-4 py-1">
          <span className="text-3xl text-[#8D6E63] select-none leading-none">❝</span>
          <p className="text-xl text-[#5B8C5A] dark:text-[#A5D6A7] italic font-medium tracking-wide">
            莫听穿林打叶声, 一蓑烟雨任平生
          </p>
          <span className="text-3xl text-[#8D6E63] select-none leading-none">❞</span>
        </div>
      </motion.div>
    </div>
  )
}
