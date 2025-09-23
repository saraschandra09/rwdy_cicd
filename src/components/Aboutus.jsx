import '../components/style.css';
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading"><i>RECLAIM INDIAN SUPERMACY</i></h2>

      <div className="about-grid">
      <Link to="/Formals">
        <div className="about-item">        
          <img src="formalnew.jpg" alt="Formals" />
          <h3>Formal Wear</h3>
          <p> For the occasions when you have to clean up, but you refuse to blend in.</p>
        </div>
        </Link>

        <Link to="/Casuals">
        <div className="about-item">
          <img src="Casual Wear.jpg" alt="Casuals" />
          <h3>Casual Wear</h3>
          <p>Casual wear for the non-conformist. Comfortable, authentic</p>
        </div>
        </Link>
        <Link to="/StreetWear">
        <div className="about-item">
          <img src="Trendy.jpeg" alt="StreetWear" />
          <h3>TrendyWear</h3>
          <p>Every piece is a statement. This is your uniform for freedom, built to stand out.</p>
        </div>
        </Link>
        <Link to="/Addons">
        <div className="about-item">
          <img src="accessories1.jpg" alt="Accessories" />
          <h3>Accessories</h3>
          <p> The final touch of rebellion,that define your style.</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;