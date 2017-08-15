import Link from 'next/link'

const Nav = ({ pathname }) => (
  <div className='nav-container'>
    <nav>
      <Link prefetch href='/'>
        <a className={(pathname === '/') && 'is-active'}>home</a>
      </Link>

      <Link prefetch href='/writing'>
        <a className={(pathname === '/writing') && 'is-active'}>writing</a>
      </Link>
    </nav>

    <style jsx>{`
      nav {
        width: 900px;
        margin: 0 auto;
        padding: 20px;
        text-align: right;
      }

      a {
        font-size: 1.2em;
        margin-left: 25px;
        letter-spacing: 1px;
        text-decoration: none;
        text-decoration: none;
      }

      a:hover {
        color: red;
      }

      .is-active {
        color: red;
      }
    `}</style>
  </div>
)

export default Nav
