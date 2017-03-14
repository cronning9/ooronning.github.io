'use strict';

const projects = [
  {
    title: "Unnamed CounterStrike Skins Contest",
    description: "A web application built to facilitate giveaway contests in the Steam game Counterstrike: Global " +
                 "Offensive. Front end uses React and a custom controller, data model, and router built from scratch. " +
                 "Back-end uses Express to serve a Webpack bundle, and to make calls to the Steam API. Note: this is " +
                 "a work in progress, and is currently on hold per client request. Linked is a client-approved sample " +
                 "of some of the code.",
    link: "https://github.com/ooronning/cs-skins-contest"
  },
  {
    title: "Ditto",
    description: "Aspires to be a full-featured BitTorrent client. Written in C# with .NET Core, this is a work in " +
                 "progress, built straight from the official BitTorrent protocol specifications.",
    link: "https://gitlab.com/ditto/ditto"
  },
  {
    title: "ZimArt Mobile",
    description: "The mobile site for a sculpture gallery in Ontario, Canada. This is an older application built with " +
                 "Angular 1. I built in a new swipeable image gallery overlay, and later totally re-vamped the image " +
                 "gallery with a modern, swipeable interface. Constructed with Angular 1, JQuery, and vanilla Javascript. " +
                 "Best viewed on mobile.",
    link: "http://m.zimart.ca"
  },
  {
    title: "chrisronning.com",
    description: "The site you're looking at. Written from scratch using React and some CSS3 techniques. A work in " +
                 "progress, but I've come out of it with some nice, re-usable React components. See link below " +
                 "for the codebase.",
    link: "https://github.com/ooronning/ooronning.github.io"
  }
];

export default projects;