const Header = ({ title, subLine, pageImage, isIcon }) => (
  <div className='header-container'>
    <header>
      <h1>{title}</h1>
      { subLine ? <h3>{subLine}</h3> : null}
    </header>

    <style jsx>{`
        .header-container {
          position: relative;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        header h3 {
          color: rgb(40, 45, 76);
          text-transform: uppercase;
        }
    `}</style>
  </div>
)

export default Header
