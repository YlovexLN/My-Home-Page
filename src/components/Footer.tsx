import { useEffect, useState } from 'react'

export function Footer() {
  const [sitePv, setSitePv] = useState(0)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    // Vercount 脚本自动处理
  }, [])

  return (
    <footer className="w-full text-center text-lg text-gray-900 dark:text-gray-100 leading-tight font-medium">
      <div className="flex flex-wrap justify-center items-center gap-1 px-4">
        <span>Copyright © {currentYear} YlovexLN|竹顾渊丶|</span>
        <a
          href="https://www.pixiv.net/artworks/62258773"
          target="_blank"
          className="hover:text-[#5B8C5A] transition-all duration-300"
        >
          Background - Image
        </a>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-1 px-4">
        <span>CDN - <a href="https://www.qiniu.com/" target="_blank" className="hover:text-[#5B8C5A] transition-all duration-300">七牛云</a></span>
        <span>| HOST - <a href="https://edgeone.ai/" target="_blank" className="hover:text-[#5B8C5A] transition-all duration-300">EdgeOne</a></span>
        <span>| <a href="http://beian.miit.gov.cn/" target="_blank" className="hover:text-[#5B8C5A] transition-all duration-300">黔ICP备2025044225号</a></span>
        <span>| 本站总访问量 <span id="vercount_value_site_pv">0</span> 次</span>
      </div>
    </footer>
  )
}
