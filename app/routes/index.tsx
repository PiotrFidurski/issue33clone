import { LinksFunction } from "remix";
import styles from "../styles/index.css";

export const links: LinksFunction = () => {
  return [{ href: styles, rel: "stylesheet" }];
};

export default function Index() {
  return (
    <main id="main-content">
      <div className="wrapper">
        <article className="start">
          <div className="start__header">
            <h1>
              Digital Marketing is our
              <em>Bread & Butter</em>
            </h1>
          </div>
          <div className="start__content">
            <p>
              Let us help you create the perfect campaign with our multi-faceted
              team of talented creatives.
            </p>
            <a href="/" className="button">
              see our work
            </a>
          </div>
          <div className="start__media">
            <img src="/images/toast.jpg" width="100%" height="100%" />
          </div>
        </article>
      </div>
    </main>
  );
}
