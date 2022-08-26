import React from "react"

import { SEO } from "../components/seo"
import "/static/css/global.css"

export default function Home() {
  return (
    <main className="container">
      <div className="content">
        <h1>hm servers</h1>
        <p>
          The hm-servers.com domain is not active serving webpages. I just keep
          this for testing or other unpublished tasks. Feel free to check back.
          But, I wouldn't expect to find anything here.
        </p>
        <div>
          Visit some of my more active projects
          <ul className="links">
            <li>
              <a href="https://www.hillbillyradio.net">Hillbilly Radio</a>
            </li>
            <li>
              <a href="https://bearcountrypublishing.com">
                Bear Country Publishing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        This page is available on
        <a href="https://github.com/caldwmark/gatsby-simple-splash-page">
          {" "}
          Github
        </a>
      </footer>
    </main>
  )
}

export const Head = () => <SEO />
