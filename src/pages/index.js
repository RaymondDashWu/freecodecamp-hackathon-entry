import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello freeCodeCamp!</h1>
    <iframe src="https://cloud.panono.com/p/ChAb8I0DlZz1/embed?autorotate=false" width="560" height="315" frameborder="0" scrolling="no" allowfullscreen></iframe>
        <br></br>
        <sub>Me in the center with many of my classmates</sub>
        <p></p>
    <p>My name is Raymond Wu and I&apos;m currently a student at Make School studying to become a data scientist.
    So far I&apos;ve done some work with React, Node, Handlebars though I favor using Python when possible. I&apos;m
    new to the area but am loving every moment and embracing the tech culture any moment I can!
    I&apos;m excited to be a part of this hackathon and would love to get a free ticket to this event!
    I&apos;ve participated in group coding sessions but never a full on hackathon.
    I&apos;m excited to take part in this event and also anxious to see what everyone else will make! </p>

    <Link to="/page-2/">Reasons to consider me: </Link><br></br>
    <a href="http://raymond-wu.com/">My website</a>
  </div>
)

export default IndexPage
