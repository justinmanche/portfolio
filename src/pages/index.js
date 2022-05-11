import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'

const links = [
  {
    text: "Résumé",
    url: "/resume",
    color: "#E95800"
  },
  {
    text: "Stuff I did for fun",
    url: "/portfolio",
    color: "#1099A8",
  },
  {
    text: "Blog",
    url: "/blog",
    color: "#BC027F",
  }
]

// markup
const IndexPage = () => (
  <Layout>
    <ul>
      {links.map(({ url, text }) => (
        <li key={text}><Link to={url}>{text}</Link></li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
