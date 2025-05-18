import React from "react"
import Layout from "../components/Layout"

const PostGatsbyVercel = () => (
  <Layout>
    <h2>Por que escolhi Gatsby e Vercel para meu blog</h2>
    <p><strong>Data:</strong> 18 de Maio de 2025</p>

    <p>
      Se você está começando na área de desenvolvimento web e quer criar um blog moderno, rápido e fácil de publicar, 
      duas tecnologias que recomendo muito são: <strong>Gatsby</strong> e <strong>Vercel</strong>.
    </p>

    <h3>🧱 O que é o Gatsby?</h3>
    <p>
      O <strong>Gatsby</strong> é um gerador de sites estáticos que usa o <strong>React</strong> por baixo dos panos.
      Ele transforma seu código em páginas super otimizadas, que carregam rápido e funcionam bem até com internet lenta.
    </p>
    <p>
      Ideal para blogs, portfólios e sites que precisam de desempenho e segurança, já que tudo é pré-gerado como arquivos HTML.
    </p>

    <h3>🚀 O que é a Vercel?</h3>
    <p>
      A <strong>Vercel</strong> é uma plataforma de hospedagem na nuvem que facilita o deploy de projetos como este.
      Com apenas alguns cliques, você conecta seu repositório do GitHub e seu site vai ao ar automaticamente.
    </p>
    <p>
      Toda vez que você atualiza seu código e envia para o GitHub, a Vercel cuida do resto. É como um "publicar automático".
    </p>

    <h3>💡 Por que escolhi essas ferramentas?</h3>
    <ul>
      <li>✔️ Gatsby usa React, então é ótimo para aprender e praticar</li>
      <li>✔️ Sites são rápidos, seguros e otimizados</li>
      <li>✔️ Fácil de integrar com Markdown ou CMS futuramente</li>
      <li>✔️ Vercel tem deploy automático e é gratuito para projetos pessoais</li>
    </ul>

    <p>
      Em resumo, Gatsby + Vercel é uma dupla poderosa para quem quer começar um blog com tecnologias modernas,
      sem complicações.
    </p>
  </Layout>
)

export default PostGatsbyVercel
