'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavLink {
  href: string
  children: React.ReactNode
}

export const NavLink: React.FC<INavLink> = (props) => {
  const { href, children } = props
  const pathname = usePathname()

  return (
    <Link href={href} className={pathname.startsWith(href) && 'active'}>
      {children}
    </Link>
  )
}
