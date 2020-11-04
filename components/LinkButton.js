import Link from 'next/link'

export default function LinkButton(props) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a href={props.href} className='link-button'>
          {props.text}
          {props.children}
        </a>
      </Link>
    )
  }
  else {
    return (
      <a href='#' className='link-button'>
        {props.text}
      </a>
    )
  }
}
