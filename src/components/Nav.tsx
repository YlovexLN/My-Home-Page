import { Home, UserCircle, Star, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { name: '主页', icon: <Home className="w-7 h-7" />, href: 'https://www.ylovexln.top/' },
  { name: '关于', icon: <UserCircle className="w-7 h-7" />, href: 'https://blog.ylove.work/about/' },
  { name: '博客', icon: <Star className="w-7 h-7" />, href: 'https://blog.ylove.work/' },
  { name: '友链', icon: <Send className="w-7 h-7" />, href: 'https://blog.ylovex.work/links' },
]

export function Nav() {
  return (
    <div className="w-full">
      {/* 细分隔线 */}
      <div className="border-t border-black/5 dark:border-white/5 mb-4"></div>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center gap-3 flex-wrap"
       >
         {links.map((link) => (
           <a
             key={link.name}
             href={link.href}
             className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#E8F5E9] dark:bg-[rgba(129,199,132,0.1)] rounded-xl text-lg font-medium text-[#2D3A2D] dark:text-[#E8F5E9] hover:bg-[#C8E6C9] dark:hover:bg-[rgba(129,199,132,0.2)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
          >
            <span className="text-[#5B8C5A] dark:text-[#81C784] group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </span>
            <span>{link.name}</span>
          </a>
        ))}
      </motion.nav>
    </div>
  )
}
