import Link from 'next/link'
import LinkButton from './LinkButton'

export default function NavbarMenu(props) {
  return(
    <div className='navbar-menu-wrapper'>
      <ul className='navbar-menu-list'>
        {props.navItems.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>
            <a className={item.link == props.activePage ? 'active' : ''}>{item.title}</a>
          </Link>
        </li>))}
      </ul>
      <LinkButton text='Contact me' href={`mailto:${props.emails[0].email}`}>
        <svg className='navbar-menu-list-link-button-svg' viewBox="0 0 24 24">
          <path fill="#333" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
        </svg>
      </LinkButton>
    </div>
  )
}
