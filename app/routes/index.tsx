import { LinksFunction } from "remix";
import { Logo } from "~/components/Logo";
import styles from "../styles/index.css";

export const links: LinksFunction = () => {
  return [{ href: styles, rel: "stylesheet" }];
};

export default function Index() {
  return (
    <div className="dot-shadow">
      <Logo />
    </div>
  );
}
