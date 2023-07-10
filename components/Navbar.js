import Link from "next/link";
import NavbarMenu from "./NavbarMenu";

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <Link href="/" className="navbar-name">
          <h1>
            Kamil <span>Pawlak</span>
          </h1>
        </Link>
        <NavbarMenu
          navItems={props.navItems}
          resumeLink={props.resumeLink}
          activePage={props.activePage}
        />
      </nav>
    </div>
  );
}
