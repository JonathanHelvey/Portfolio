import { formatDate } from './Writings';

export default function Post({ route }) {
  const { post } = route;
  return (
    <article className="section page post">
      <a className="back-link" href="/writings/">
        ← All writings
      </a>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      {/* Trusted HTML: rendered at build time from markdown in src/posts. */}
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
