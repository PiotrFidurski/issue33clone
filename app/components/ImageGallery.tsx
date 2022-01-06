export function ImageGallery() {
  return (
    <article className="studio">
      <div className="wrapper">
        <div className="studio__inner">
          <h2>From inside the studio</h2>
          <ul>
            {Array(6)
              .fill(null)
              .map((_) => (
                <li>
                  <img width="100%" height="100%" src="//unsplash.it/800/600" />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
