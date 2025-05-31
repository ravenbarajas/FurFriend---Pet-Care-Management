import { useState } from 'react';
import PetProfiles from './PetProfiles';
import Appointments from './Appointments';
import Treatments from './Treatments';
import Billing from './Billing';
import Messages from './Messages';

type DashboardSection = 'overview' | 'pets' | 'appointments' | 'treatments' | 'billing' | 'messages';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'pets':
        return <PetProfiles />;
      case 'appointments':
        return <Appointments />;
      case 'treatments':
        return <Treatments />;
      case 'billing':
        return <Billing />;
      case 'messages':
        return <Messages />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <i className="fas fa-paw"></i> PetCarePro
          </div>
        </div>
        <ul className="sidebar__nav">
          <li className="sidebar__item">
            <button 
              className={`sidebar__link ${activeSection === 'overview' ? 'sidebar__link--active' : ''}`}
              onClick={() => setActiveSection('overview')}
              style={{ width: '100%', background: 'none', border: 'none' }}
            >
              <i className="fas fa-tachometer-alt"></i>
              Dashboard
            </button>
          </li>
          <li className="sidebar__item">
            <button 
              className={`sidebar__link ${activeSection === 'pets' ? 'sidebar__link--active' : ''}`}
              onClick={() => setActiveSection('pets')}
              style={{ width: '100%', background: 'none', border: 'none' }}
            >
              <i className="fas fa-paw"></i>
              Pet Profiles
            </button>
          </li>
          <li className="sidebar__item">
            <button 
              className={`sidebar__link ${activeSection === 'appointments' ? 'sidebar__link--active' : ''}`}
              onClick={() => setActiveSection('appointments')}
              style={{ width: '100%', background: 'none', border: 'none' }}
            >
              <i className="fas fa-calendar-alt"></i>
              Appointments
            </button>
          </li>
          <li className="sidebar__item">
            <button 
              className={`sidebar__link ${activeSection === 'treatments' ? 'sidebar__link--active' : ''}`}
              onClick={() => setActiveSection('treatments')}
              style={{ width: '100%', background: 'none', border: 'none' }}
            >
              <i className="fas fa-syringe"></i>
              Treatments
            </button>
          </li>
          <li className="sidebar__item">
            <button 
              className={`sidebar__link ${activeSection === 'billing' ? 'sidebar__link--active' : ''}`}
              onClick={() => setActiveSection('billing')}
              style={{ width: '100%', background: 'none', border: 'none' }}
            >
              <i className="fas fa-receipt"></i>
              Billing
            </button>
          </li>
          <li className="sidebar__item">
            <button 
              className={`sidebar__link ${activeSection === 'messages' ? 'sidebar__link--active' : ''}`}
              onClick={() => setActiveSection('messages')}
              style={{ width: '100%', background: 'none', border: 'none' }}
            >
              <i className="fas fa-comments"></i>
              Messages
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="main-header">
          <h1 className="main-header__title">
            {activeSection === 'overview' ? 'Dashboard' : 
             activeSection === 'pets' ? 'Pet Profiles' :
             activeSection === 'appointments' ? 'Appointments' :
             activeSection === 'treatments' ? 'Treatments' :
             activeSection === 'billing' ? 'Billing' :
             'Messages'}
          </h1>
          <div className="user-dropdown">
            <div className="user-avatar">JD</div>
            <div>
              <div style={{ fontWeight: '600' }}>Dr. John Doe</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Happy Paws Clinic</div>
            </div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

function DashboardOverview() {
  return (
    <div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="dashboard-card__icon dashboard-card__icon--blue">
            <i className="fas fa-paw"></i>
          </div>
          <div className="dashboard-card__content">
            <h3>247</h3>
            <p>Total Pets</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card__icon dashboard-card__icon--yellow">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="dashboard-card__content">
            <h3>18</h3>
            <p>Today's Appointments</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card__icon dashboard-card__icon--green">
            <i className="fas fa-syringe"></i>
          </div>
          <div className="dashboard-card__content">
            <h3>5</h3>
            <p>Treatments Due</p>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-card__icon dashboard-card__icon--orange">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <div className="dashboard-card__content">
            <h3>3</h3>
            <p>Overdue Alerts</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-lg)' }}>
        <div className="table">
          <div className="table__header">
            <h3 className="table__title">Recent Appointments</h3>
            <button className="btn btn--secondary">View All</button>
          </div>
          <div className="table__content">
            <table className="table__element">
              <thead>
                <tr>
                  <th>Pet</th>
                  <th>Owner</th>
                  <th>Time</th>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Buddy</td>
                  <td>Sarah Johnson</td>
                  <td>10:00 AM</td>
                  <td>Annual Checkup</td>
                  <td><span className="status-badge status-badge--healthy">Completed</span></td>
                </tr>
                <tr>
                  <td>Luna</td>
                  <td>Mike Chen</td>
                  <td>11:30 AM</td>
                  <td>Vaccination</td>
                  <td><span className="status-badge status-badge--due">In Progress</span></td>
                </tr>
                <tr>
                  <td>Max</td>
                  <td>Emily Davis</td>
                  <td>2:00 PM</td>
                  <td>Dental Cleaning</td>
                  <td><span className="status-badge status-badge--overdue">Scheduled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <button className="btn btn--primary w-full">
              <i className="fas fa-plus"></i>
              Add New Pet
            </button>
            <button className="btn btn--secondary w-full">
              <i className="fas fa-calendar-plus"></i>
              Schedule Appointment
            </button>
            <button className="btn btn--secondary w-full">
              <i className="fas fa-syringe"></i>
              Record Treatment
            </button>
            <button className="btn btn--secondary w-full">
              <i className="fas fa-file-invoice"></i>
              Create Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
