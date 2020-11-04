import BottomNavItem from '../components/BottomNavItem'

export default function BottomNavBar(props) {
  return (
    <div className='bottom-nav'>
      <ul className='bottom-nav-items-container'>
        <BottomNavItem icon='home' caption='Home' href='/' active={props.activePage}/>
        <BottomNavItem icon='account-details' caption='About' href='/about' active={props.activePage}/>
        <BottomNavItem icon='briefcase' caption='Portfolio' href='/portfolio' active={props.activePage}/>
        <BottomNavItem icon='email-black' caption='Contact me' href={`mailto:${props.emails[0].email}`} active={props.activePage}/>
      </ul>
    </div>
  )
}
