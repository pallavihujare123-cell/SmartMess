import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <main className="hero">
        <div className="hero-content">
          <div className="badge">
            🍽️ Smart Food Management
          </div>

          <h1>SmartMess</h1>

          <h2>
            Manage Your Mess.
            <span> Simplify Your Meals.</span>
          </h2>

          <p>
            A simple and smart platform to manage mess subscriptions,
            meals, attendance, payments and feedback — all in one place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started →
            </button>

            <button className="secondary-btn">
              Explore Plans
            </button>
          </div>
        </div>
      </main>

      <section className="features" id="features">
        <div className="section-heading">
          <span>SMART FEATURES</span>

          <h2>Everything You Need in One Place</h2>

          <p>
            SmartMess makes everyday mess management simple and organized.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Meal Management</h3>
            <p>
              Manage breakfast, lunch and dinner selections with ease.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Attendance Tracking</h3>
            <p>
              Track daily meals and maintain accurate attendance records.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Payments & Bills</h3>
            <p>
              View subscriptions, monthly bills and payment information.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Feedback & Complaints</h3>
            <p>
              Share feedback and report issues directly through the platform.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;