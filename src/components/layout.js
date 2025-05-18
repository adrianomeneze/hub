import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => (
  <div>
    <Header />
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "200px", padding: "1rem", width: "100%" }}>
        {children}
      </main>
    </div>
  </div>
)

export default Layout
