export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  owner: string;
  lastVisit: string;
  status: 'healthy' | 'due' | 'overdue';
  image: string;
}

export interface Appointment {
  id: number;
  pet: string;
  owner: string;
  time: string;
  service: string;
  status: 'completed' | 'in-progress' | 'scheduled';
}

export interface Treatment {
  id: number;
  pet: string;
  owner: string;
  vaccine: string;
  lastGiven: string;
  nextDue: string;
  status: 'current' | 'due' | 'overdue';
}

export interface Invoice {
  id: number;
  invoiceNum: string;
  client: string;
  pet: string;
  amount: string;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
}

export interface MessageThread {
  id: number;
  name: string;
  time: string;
  preview: string;
  active: boolean;
}

export const pets: Pet[] = [
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
  // Add more pets as needed
];

export const dashboardStats = {
  totalPets: 247,
  todayAppointments: 18,
  treatmentsDue: 5,
  overdueAlerts: 3
};
