export default function PetProfiles() {
  const pets = [
    {
      id: 1,
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: '3 years old',
      owner: 'Sarah Johnson',
      lastVisit: '2 weeks ago',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200'
    },
    {
      id: 2,
      name: 'Luna',
      breed: 'Domestic Shorthair',
      age: '2 years old',
      owner: 'Mike Chen',
      lastVisit: '1 month ago',
      status: 'due',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200'
    },
    {
      id: 3,
      name: 'Max',
      breed: 'German Shepherd',
      age: '5 years old',
      owner: 'Emily Davis',
      lastVisit: '3 months ago',
      status: 'overdue',
      image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200'
    },
    {
      id: 4,
      name: 'Bella',
      breed: 'Beagle',
      age: '1 year old',
      owner: 'Tom Wilson',
      lastVisit: '1 week ago',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200'
    },
    {
      id: 5,
      name: 'Whiskers',
      breed: 'Persian Cat',
      age: '4 years old',
      owner: 'Lisa Rodriguez',
      lastVisit: '2 weeks ago',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200'
    },
    {
      id: 6,
      name: 'Charlie',
      breed: 'Labrador Retriever',
      age: '6 months old',
      owner: 'David Thompson',
      lastVisit: '3 weeks ago',
      status: 'due',
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200'
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2>Pet Profiles</h2>
        <button className="btn btn--primary">
          <i className="fas fa-plus"></i>
          Add New Pet
        </button>
      </div>

      <div className="pet-grid">
        {pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={`${pet.name} the ${pet.breed}`} className="pet-card__image" />
            <div className="pet-card__content">
              <div className="pet-card__header">
                <div>
                  <h3 className="pet-card__name">{pet.name}</h3>
                  <p className="pet-card__breed">{pet.breed}</p>
                </div>
                <div className="pet-card__status">
                  <span className={`status-badge status-badge--${pet.status}`}>
                    {pet.status === 'healthy' ? 'Healthy' : 
                     pet.status === 'due' ? 'Vaccine Due' : 'Overdue'}
                  </span>
                </div>
              </div>
              <div className="pet-card__info">
                <div className="pet-card__info-item">
                  <i className="fas fa-birthday-cake"></i>
                  <span>{pet.age}</span>
                </div>
                <div className="pet-card__info-item">
                  <i className="fas fa-user"></i>
                  <span>{pet.owner}</span>
                </div>
                <div className="pet-card__info-item">
                  <i className="fas fa-calendar"></i>
                  <span>Last visit: {pet.lastVisit}</span>
                </div>
                <div className="pet-card__info-item">
                  <i className="fas fa-syringe"></i>
                  <span>
                    {pet.status === 'healthy' ? 'Vaccines current' :
                     pet.status === 'due' ? 'Rabies due in 2 days' :
                     'Annual checkup overdue'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
