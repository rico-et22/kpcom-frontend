import Link from "next/link";
import LinkButton from "./LinkButton";

export default function NavbarMenu(props) {
  return (
    <div className="navbar-menu-wrapper">
      <ul className="navbar-menu-list">
        {props.navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className={item.link == props.activePage ? "active" : ""}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <LinkButton text="Resume" href={props.resumeLink}></LinkButton>
    </div>
  );
}
