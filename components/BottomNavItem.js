import Link from "next/link";

export default function BottomNavItem(props) {
  const checkActive = () => {
    if (props.href === props.active) {
      return "bottom-nav-item active";
    } else {
      return "bottom-nav-item";
    }
  };
  return (
    <li>
      <Link
        href={props.href}
        style={{
          display: "flex",
          "flex-direction": "column",
          alignItems: "center",
        }}
        className={checkActive()}
      >
        <img
          src={`/static/icons/${props.icon}.svg`}
          className="bottom-nav-item-svg"
          alt={props.icon}
        />
        <p style={{ fontSize: ".75rem" }}>{props.caption}</p>
      </Link>
    </li>
  );
}
