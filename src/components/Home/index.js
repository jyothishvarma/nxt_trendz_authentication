// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <div className="app-container">
      <Header />
      <div className="home-page-container">
        <div className="home-page-details-container">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-mobile-image"
          />
          <p className="home-description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a resolution. Your Fashion makes you been seen and
            heard that way you are. So celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="shop-btn" type="button">
            Shop now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-desktop-image"
        />
      </div>
    </div>
  </>
)

export default Home
