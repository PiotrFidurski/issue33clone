import type { LinksFunction, MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import { Logo } from "./components/Logo";
import fontStyles from "./styles/font.css";
import styles from "./styles/root.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    { href: styles, rel: "stylesheet" },
    { href: fontStyles, rel: "stylesheet" },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/RedHatDisplay-Black.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/RedHatDisplay-Black.woff",
      type: "font/woff",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/RedHatDisplay-Regular.woff2",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      as: "font",
      href: "/fonts/RedHatDisplay-Regular.woff",
      type: "font/woff",
      crossOrigin: "anonymous",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <a href="#main-content" className="button skip-nav-link">
            Skip to content
          </a>
          <header role="banner" className="main-header">
            <div className="wrapper">
              <div className="main-header__inner">
                <a href="/" aria-label="Issue 33 - home" className="logo">
                  <Logo />
                </a>
                <nav aria-label="Primary navigation" className="nav">
                  <ul className="nav__list">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Work</a>
                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
