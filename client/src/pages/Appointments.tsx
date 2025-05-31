import { useState } from 'react';
import Modal from '../components/UI/Modal';

export default function Appointments() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const appointments = [
    { id: 1, pet: 'Buddy', owner: 'Sarah Johnson', time: '9:00 AM', service: 'Checkup' },
    { id: 2, pet: 'Luna', owner: 'Mike Chen', time: '2:00 PM', service: 'Vaccine' },
    { id: 3, pet: 'Max', owner: 'Emily Davis', time: '10:30 AM', service: 'Grooming' },
    { id: 4, pet: 'Bella', owner: 'Tom Wilson', time: '11:00 AM', service: 'Surgery' },
    { id: 5, pet: 'Charlie', owner: 'David Thompson', time: '3:00 PM', service: 'Vaccine' },
    { id: 6, pet: 'Whiskers', owner: 'Lisa Rodriguez', time: '9:30 AM', service: 'Checkup' },
    { id: 7, pet: 'Rocky', owner: 'James Miller', time: '2:30 PM', service: 'Dental' }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2>Appointments</h2>
        <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
          <i className="fas fa-plus"></i>
          Schedule Appointment
        </button>
      </div>

      <div className="calendar">
        <div className="calendar__header">
          <button className="calendar__nav"><i className="fas fa-chevron-left"></i></button>
          <h3>March 2024</h3>
          <button className="calendar__nav"><i className="fas fa-chevron-right"></i></button>
        </div>
        <div className="calendar__grid">
          <div className="calendar__day-header">Sun</div>
          <div className="calendar__day-header">Mon</div>
          <div className="calendar__day-header">Tue</div>
          <div className="calendar__day-header">Wed</div>
          <div className="calendar__day-header">Thu</div>
          <div className="calendar__day-header">Fri</div>
          <div className="calendar__day-header">Sat</div>
          
          {/* Calendar days with appointments */}
          <div className="calendar__day calendar__day--other-month">
            <div className="calendar__date">25</div>
          </div>
          <div className="calendar__day calendar__day--other-month">
            <div className="calendar__date">26</div>
          </div>
          <div className="calendar__day calendar__day--other-month">
            <div className="calendar__date">27</div>
          </div>
          <div className="calendar__day calendar__day--other-month">
            <div className="calendar__date">28</div>
          </div>
          <div className="calendar__day calendar__day--other-month">
            <div className="calendar__date">29</div>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">1</div>
            <span className="calendar__appointment">9:00 AM - Buddy Checkup</span>
            <span className="calendar__appointment">2:00 PM - Luna Vaccine</span>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">2</div>
          </div>
          
          <div className="calendar__day">
            <div className="calendar__date">3</div>
            <span className="calendar__appointment">10:30 AM - Max Grooming</span>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">4</div>
            <span className="calendar__appointment">11:00 AM - Bella Surgery</span>
            <span className="calendar__appointment">3:00 PM - Charlie Vaccine</span>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">5</div>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">6</div>
            <span className="calendar__appointment">9:30 AM - Whiskers Checkup</span>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">7</div>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">8</div>
            <span className="calendar__appointment">2:30 PM - Rocky Dental</span>
          </div>
          <div className="calendar__day">
            <div className="calendar__date">9</div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Schedule New Appointment"
      >
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="form__group">
            <label className="form__label">Pet</label>
            <select className="form__select">
              <option>Select a pet</option>
              <option>Buddy (Golden Retriever)</option>
              <option>Luna (Domestic Shorthair)</option>
              <option>Max (German Shepherd)</option>
              <option>Bella (Beagle)</option>
            </select>
          </div>
          <div className="form__row">
            <div className="form__group">
              <label className="form__label">Date</label>
              <input type="date" className="form__input" />
            </div>
            <div className="form__group">
              <label className="form__label">Time</label>
              <input type="time" className="form__input" />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label">Service Type</label>
            <select className="form__select">
              <option>Select service</option>
              <option>Annual Checkup</option>
              <option>Vaccination</option>
              <option>Dental Cleaning</option>
              <option>Surgery</option>
              <option>Grooming</option>
              <option>Emergency Visit</option>
            </select>
          </div>
          <div className="form__group">
            <label className="form__label">Notes</label>
            <textarea className="form__textarea" placeholder="Any special instructions or concerns..."></textarea>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn--secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn btn--primary" onClick={() => setIsModalOpen(false)}>Schedule Appointment</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
