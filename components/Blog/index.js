
import Head from "next/head";
import React,  { useEffect } from "react"
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import Header from '../Header';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

export default function Blog(props) {


  useEffect(() => {
    hljs.highlightAll();
}, []);

  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
        <meta name="description" content={props.description} />

        <meta property="og:site_name" content="MDX Blog" />

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />

        <meta property="og:image" content={props.thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.thumbnailUrl} />
      </Head>
      <Header />
      <article>

        <h1>{props.title}</h1>
        <p className="stats" >{props.stats}</p>
        <img className="thumbnail" src={props.thumbnailUrl} alt={props.title} />
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </main>
  );
}
