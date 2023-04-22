/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link"
import React from "react"

import { cn } from "@/utils/cn"

interface SidebarItemProps {
  active?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  children?: React.ReactNode
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  active = false,
  icon,
  iconPosition = "left",
  children,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 text-2xl rounded-lg bg-stone-200 dark:bg-stone-800 cursor-pointer active:scale-95",
        active && "outline-purple-500 dark:outline-purple-900 outline-1 outline",
      )}
    >
      {iconPosition === "left" && icon}
      <p
        className={cn(
          "text-base",
          active
            ? "text-stone-950 dark:text-stone-50"
            : "text-stone-700 dark:text-stone-300",
        )}
      >
        {children}
      </p>
      {iconPosition === "right" && icon}
    </div>
  )
}

interface SidebarItemLinkProps extends SidebarItemProps {
  href: string
}

const SidebarItemLink: React.FC<SidebarItemLinkProps> = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <SidebarItem {...props}>{props.children}</SidebarItem>
    </Link>
  )
}

export { SidebarItem, SidebarItemLink }
