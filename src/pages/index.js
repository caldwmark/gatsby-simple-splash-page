import React from "react";
import { Link } from "gatsby"
import "/static/css/global.css";


export default function Home() {
  return (
    <article className='container'>
      <div className='main'>
        <p>
          The hm-servers.com domain is not active serving webpages.  I just keep this for 
          testing or other unpublished tasks.  Feel free to check back.  But, I wouldn't 
          expect to find anything here. 
        </p>
        <div>
          Visit some of my more active projects
          <ul className='links'>
            <li><Link to="https://www.hillbillyradio.net">Hillbilly Radio</Link></li>
            <li><Link to='https://www.bearcountrypublishing.com'>Bear Country Publishing</Link></li>
          </ul>
        </div>
      </div>
    </article>
  )
}
