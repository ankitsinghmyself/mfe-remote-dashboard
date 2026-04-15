import React from 'react';
import './App.css';

const App: React.FC = () => {
  // Mock analytics data
  const stats = [
    { label: 'Total Revenue', value: '$245,342', change: '+12.5%', trend: 'up' },
    { label: 'Active Users', value: '18,247', change: '+8.2%', trend: 'up' },
    { label: 'New Orders', value: '1,234', change: '-3.1%', trend: 'down' },
    { label: 'Conversion Rate', value: '3.42%', change: '+0.3%', trend: 'up' },
  ];

  const activities = [
    'User 1847 completed purchase - $89.99',
    'New user registration from India',
    'Campaign "Summer Sale" reached 5k impressions',
    'Order #1234 shipped to California',
    'A/B test variation B outperforming by 14%'
  ];

  return (
    <div className="dashboard-app">
      {/* MFE Header */}
      <div className="mfe-header">
        <div className="header-content">
          <h1 className="header-title">Analytics Dashboard</h1>
          <div className="header-badges">
            <span className="badge primary">Dashboard Micro Frontend</span>
<a 
              href="https://mfe-remote-dashboard.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="badge"
              aria-label="Open Dashboard MFE"
            >
              Port: https://mfe-remote-dashboard.vercel.app/
            </a>
            <span className="badge">Team: Analytics</span>
            <span className="badge">Version: v1.0.0</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="card-header">
                <h3 className="stat-label">{stat.label}</h3>
                <div className={`trend-indicator ${stat.trend}`}>
                  <span className="trend-arrow">▴</span>
                  <span className="trend-value">{stat.change}</span>
                </div>
              </div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card large">
            <h3>Revenue Trend</h3>
            <div className="chart-placeholder revenue-chart">
              <div className="placeholder-content bars">
                <div className="placeholder-bar blue" style={{height: '40%'}}></div>
                <div className="placeholder-bar" style={{height: '25%'}}></div>
                <div className="placeholder-bar blue" style={{height: '65%'}}></div>
                <div className="placeholder-bar" style={{height: '50%'}}></div>
                <div className="placeholder-bar blue" style={{height: '85%'}}></div>
              </div>
            </div>
          </div>
          <div className="chart-card">
            <h3>User Growth</h3>
            <div className="chart-placeholder user-chart">
              <div className="placeholder-circle"></div>
              <div className="placeholder-line"></div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {activities.map((item, index) => (
              <div key={index} className="activity-item">
                <div className="activity-dot blue"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

