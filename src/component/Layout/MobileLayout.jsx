// import './MobileLayout.css'

export const MobileLayout = ({ children }) => {
  return (
    <div className="mobile-layout">
      <div className="mobile-screen">
        {children}
      </div>
    </div>
  )
}