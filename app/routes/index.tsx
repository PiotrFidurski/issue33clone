import { LinksFunction } from "remix";
import { Article } from "~/components/Article";
import { ImageGallery } from "~/components/ImageGallery";
import styles from "../styles/index.css";

export const links: LinksFunction = () => {
  return [{ href: styles, rel: "stylesheet" }];
};

export default function Index() {
  return (
    <main id="main-content">
      <div className="wrapper">
        <article className="introduction">
          <div className="introduction__header">
            <h1>
              Digital Marketing is our
              <em>Bread & Butter</em>
            </h1>
          </div>
          <div className="introduction__content">
            <p>
              Let us help you create the perfect campaign with our multi-faceted
              team of talented creatives.
            </p>
            <a href="/" className="button">
              see our work
            </a>
          </div>
          <div className="introduction__media">
            <img src="/images/toast.jpg" width="100%" height="100%" />
          </div>
        </article>
      </div>
      <Article
        header="This is an agency that doesn't actually exist"
        paragraph="This is the project site you build when you take the “Learn
              Eleventy From Scratch” course so it is all made up as a pretend
              context. You will learn a lot about Eleventy by building this site
              though. Take the course today!"
        linkText="buy a copy"
      />
      <article className="work">
        <div className="wrapper">
          <div className="work__inner">
            <div className="work__content">
              <h2>Selected work</h2>
              <p>
                Some stuff that should give you an idea of what we’re all about.
              </p>
            </div>
            <a href="/">
              <img
                src="/images/outgoings-hero.jpg"
                width="100%"
                height="auto"
              />
            </a>
            <a href="/">
              <img
                src="/images/behind-the-scenes-hero.jpg"
                width="100%"
                height="auto"
              />
            </a>
            <a href="/">
              <img
                src="/images/brunch-and-brew-hero.jpg"
                width="100%"
                height="auto"
              />
            </a>
          </div>
        </div>
        <div className="work__action">
          <a href="/" className="button">
            see more work
          </a>
        </div>
      </article>
      <ImageGallery />
      <Article
        header="Get in touch if we seem like a good fit"
        paragraph="Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla."
        linkText="start a new project"
      />
    </main>
  );
}
