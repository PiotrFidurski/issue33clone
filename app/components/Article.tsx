type ArticleProps = {
  header: string;
  paragraph: string;
  linkText: string;
};

export function Article({ header, paragraph, linkText }: ArticleProps) {
  return (
    <article className="buy">
      <div className="wrapper">
        <div className="buy__inner">
          <h2>{header}</h2>
          <p>{paragraph}</p>
          <div className="buy__action">
            <a href="/" className="button shadow-button">
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
