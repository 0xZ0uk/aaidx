import { useRouter } from "next/router"
import React from "react"

import { SidebarItemLink } from "./SidebarItem"
import SidebarProjectMenu from "./SidebarProjectMenu"

interface SidebarProps {
  routes: {
    path: string
    name: string
    icon: React.ReactNode
  }[]
  children?: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ routes, children }) => {
  const { asPath } = useRouter()

  const active = (path: string) => {
    return asPath === path
  }

  return (
    <div className="w-full basis-1/3 h-full border-r dark:border-stone-700 p-4">
      <SidebarProjectMenu />
      <div className="flex flex-col gap-3">
        {routes.map((route) => (
          <SidebarItemLink
            key={route.path}
            href={route.path}
            active={active(route.path)}
            icon={route.icon}
          >
            {route.name}
          </SidebarItemLink>
        ))}
      </div>
      {children}
    </div>
  )
}

export default Sidebar
