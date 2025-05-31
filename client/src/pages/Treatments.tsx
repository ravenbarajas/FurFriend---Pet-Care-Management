export default function Treatments() {
  const treatments = [
    { id: 1, pet: 'Buddy', owner: 'Sarah Johnson', vaccine: 'Rabies', lastGiven: 'Mar 15, 2023', nextDue: 'Mar 15, 2024', status: 'current' },
    { id: 2, pet: 'Luna', owner: 'Mike Chen', vaccine: 'DHPP', lastGiven: 'Feb 10, 2024', nextDue: 'Mar 8, 2024', status: 'due' },
    { id: 3, pet: 'Max', owner: 'Emily Davis', vaccine: 'Rabies', lastGiven: 'Jan 20, 2023', nextDue: 'Jan 20, 2024', status: 'overdue' },
    { id: 4, pet: 'Bella', owner: 'Tom Wilson', vaccine: 'Bordetella', lastGiven: 'Dec 5, 2023', nextDue: 'Jun 5, 2024', status: 'current' },
    { id: 5, pet: 'Charlie', owner: 'David Thompson', vaccine: 'DHPP (2nd)', lastGiven: 'Feb 20, 2024', nextDue: 'Mar 12, 2024', status: 'due' }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2>Treatment Tracking</h2>
        <button className="btn btn--primary">
          <i className="fas fa-plus"></i>
          Record Treatment
        </button>
      </div>

      <div className="table">
        <div className="table__header">
          <h3 className="table__title">Vaccination Schedule</h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            <button className="btn btn--secondary">Filter</button>
            <button className="btn btn--secondary">Export</button>
          </div>
        </div>
        <div className="table__content">
          <table className="table__element">
            <thead>
              <tr>
                <th>Pet</th>
                <th>Owner</th>
                <th>Vaccine Type</th>
                <th>Last Given</th>
                <th>Next Due</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {treatments.map(treatment => (
                <tr key={treatment.id}>
                  <td>{treatment.pet}</td>
                  <td>{treatment.owner}</td>
                  <td>{treatment.vaccine}</td>
                  <td>{treatment.lastGiven}</td>
                  <td>{treatment.nextDue}</td>
                  <td>
                    <span className={`status-badge status-badge--${treatment.status === 'current' ? 'healthy' : treatment.status === 'due' ? 'due' : 'overdue'}`}>
                      {treatment.status === 'current' ? 'Current' : 
                       treatment.status === 'due' ? 'Due Soon' : 'Overdue'}
                    </span>
                  </td>
                  <td>
                    <button className={`btn ${treatment.status === 'overdue' ? 'btn--primary' : 'btn--secondary'} btn--sm`}>
                      {treatment.status === 'overdue' ? 'Urgent' : treatment.status === 'due' ? 'Schedule' : 'Update'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
