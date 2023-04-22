/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRouter } from "next/router"
import React from "react"
import { FaPlus } from "react-icons/fa"

interface SidebarProjectMenuProps {
  project?: {
    title: string
    path: string
    icon?: string
  }
}

const SidebarProjectMenu: React.FC<SidebarProjectMenuProps> = ({ project }) => {
  const router = useRouter()

  return (
    <div className="dark:bg-black bg-white px-4 rounded-lg mb-8">
      <div
        className="flex gap-4 items-center py-4 border-b cursor-pointer border-b-stone-800"
        onClick={() => router.push("/project/new")}
      >
        <div className="rounded-lg p-4 w-fit dark:bg-stone-800 text-stone-800 dark:text-stone-200">
          {!project ? <FaPlus /> : project.icon}
        </div>

        <div>
          <h3 className="font-bold text-xl">
            {!project ? "New Project" : project.title}
          </h3>
        </div>
      </div>
      <div className="py-4">
        <p className="text-xs text-stone-700 dark:text-stone-600 underline cursor-pointer">
          {!project ? "Or open a project to start" : project.path}
        </p>
      </div>
    </div>
  )
}

export default SidebarProjectMenu
