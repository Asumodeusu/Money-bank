// import './Home.css'

export const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>BankEase</h1>
        <div className="balance-section">
          <p>Общий баланс</p>
          <h2>$25,376.50</h2>
        </div>
      </header>
      
      {/* Здесь будет контент из Figma */}
      <div className="content">
        <p>Начинай верстать здесь! 🚀</p>
      </div>
    </div>
  )
}