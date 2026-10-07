import { POSTS } from '../routes';

const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });

export function formatDate(date) {
  return dateFormat.format(new Date(`${date}T00:00:00Z`));
}

export default function Writings() {
  return (
    <section className="section page">
      <h1 className="section-title">Writings</h1>
      {POSTS.length === 0 ? (
        <p className="empty">Nothing here yet. Check back soon!</p>
      ) : (
        <ul className="post-list">
          {POSTS.map((post) => (
            <li key={post.slug} className="post-item reveal">
              <a href={`/writings/${post.slug}/`}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
