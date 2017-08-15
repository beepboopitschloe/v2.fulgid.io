export const Main = ({ children }) => (
  <main>
    {children}

    <style jsx>{`
      main {
        width: 60%;
        margin: 0 auto;
        position: relative;
      }
    `}</style>
  </main>
)
