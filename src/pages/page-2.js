import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Why you should consider me: </h1>
    <p>
        <ol>
            <li>I&apos;m outgoing and don&apos;t mind being the center of attention. See 360 on home page for photographic proof!</li>
            <li>I love to meet new people and work great in groups!</li>
            <li>I&apos;m eager to learn and build something awesome!</li>
            <li>I&apos;ve got a great attitude towards learning and will listen to fair criticisms</li>
            <li>BYOWB I&apos;ll bring my own whiteboard so that the group I join can explain ideas more efficiently!</li>
        </ol>
    </p>
    <Link to="/">Go back to the homepage</Link><br></br>
    <a href="http://raymond-wu.com/">My website</a>
  </div>
)

export default SecondPage
