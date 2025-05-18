import React from "react"

const Sidebar = () => (
  <aside style={{
    width: "200px", padding: "1rem", background: "#f4f4f4", height: "100vh", position: "fixed"
  }}>
    <ul>
      <li><a href="/">Início</a></li>
      <li><a href="/post-gatsby-vercel">Gatsby Vercel</a></li>
    </ul>
  </aside>
)

export default Sidebar
