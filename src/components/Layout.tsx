import React from "react"
import {
  MdContentPaste,
  MdDataExploration,
  MdHub,
  MdSpaceDashboard,
} from "react-icons/md"

import Sidebar from "./Sidebar"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-1 items-center h-screen justify-center">
      <Sidebar
        routes={[
          { path: "/", name: "Overview", icon: <MdSpaceDashboard /> },
          { path: "/plan", name: "Plan", icon: <MdContentPaste /> },
          { path: "/optimize", name: "Optimize", icon: <MdDataExploration /> },
          { path: "/test", name: "Test", icon: <MdHub /> },
        ]}
      />
      <div className="w-full h-full basis-auto flex flex-col items-start justify-start p-8">
        {children}
      </div>
    </main>
  )
}

export default Layout
