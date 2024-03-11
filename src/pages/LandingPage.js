import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "../styles/landing.css";
import logo from "../assets/logo.png";

const LandingPage = () => {
  return (
    <div className="hero">
      <nav>
        <div className="left">
          <NavLink to="/">
            <img src={logo} className="logo-img" />
          </NavLink>
        </div>
      </nav>
      <div className="intro-container">
      <p className="intro">
        "Bug Tracker is your comprehensive solution for efficient bug tracking
        and project management. Whether you're a developer, project manager, or
        part of a collaborative team, our platform is designed to streamline
        your workflow and enhance your bug tracking experience."
      </p>
      </div>

      <section className="features">
        <h2 className="h2">Key Features</h2>
        <div className="feature-container">
          <div className="feature-item">
            <div className="icon optimization-icon"></div>
            <h3 className="h3">Optimization</h3>
            <p>
              Maximize efficiency with user-friendly CRUD operations for bug
              management
            </p>
          </div>
          <div className="feature-item">
            <div className="icon structure-icon"></div>
            <h3 className="h3">Structure</h3>
            <p>Organize bugs with prioritization and categorization features</p>
          </div>
          <div className="feature-item">
            <div className="icon productivity-icon"></div>
            <h3 className="h3">Productivity</h3>
            <p>
              Keep your team in sync with real-time status updates and
              assignments
            </p>
          </div>
          <div className="feature-item">
            <div className="icon workflow-icon"></div>
            <h3 className="h3">Workflow</h3>
            <p>
              Ensure secure authentication and a seamless user experience with
              JWT
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="h2">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Identify Bugs</h3>
            <p>Log and categorize bugs to kickstart the tracking process.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Analyze & Assign</h3>
            <p>Analyze bugs and assign them to the appropriate team members.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Resolve & Review</h3>
            <p>Resolve bugs and review the fixes to ensure quality.</p>
          </div>
        </div>
      </section>

      <section className="get-started">
        <h2 className="h2">Get Started</h2>
        <div className="get-started-content">
          <p>
            Begin streamlining your project management today. Sign up to take
            control of your bug tracking workflow. If you're returning, simply
            log in to continue where you left off.
          </p>
          <div className="button-container">
            <div className="user-login">
              <Button variant="solid" size="md" colorScheme="blue">
                <NavLink to="/userLogin">User Login</NavLink>
              </Button>
            </div>
            <div className="admin-login">
              <Button variant="solid" size="md" colorScheme="blue">
                <NavLink to="/adminLogin">Admin Login</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
