export default function Billing() {
  const invoices = [
    { id: 1, invoiceNum: 'INV-2024-001', client: 'Sarah Johnson', pet: 'Buddy', amount: '$285.00', date: 'Mar 1, 2024', status: 'paid' },
    { id: 2, invoiceNum: 'INV-2024-002', client: 'Mike Chen', pet: 'Luna', amount: '$150.00', date: 'Mar 2, 2024', status: 'pending' },
    { id: 3, invoiceNum: 'INV-2024-003', client: 'Emily Davis', pet: 'Max', amount: '$420.00', date: 'Mar 3, 2024', status: 'overdue' }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2>Billing & Invoices</h2>
        <button className="btn btn--primary">
          <i className="fas fa-plus"></i>
          Create Invoice
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--spacing-lg)' }}>
        <div className="table">
          <div className="table__header">
            <h3 className="table__title">Recent Invoices</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
              <button className="btn btn--secondary">Filter</button>
              <button className="btn btn--secondary">Export</button>
            </div>
          </div>
          <div className="table__content">
            <table className="table__element">
              <thead>
                <tr>
                  <th>Invoice #</th>
                  <th>Client</th>
                  <th>Pet</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(invoice => (
                  <tr key={invoice.id}>
                    <td>{invoice.invoiceNum}</td>
                    <td>{invoice.client}</td>
                    <td>{invoice.pet}</td>
                    <td>{invoice.amount}</td>
                    <td>{invoice.date}</td>
                    <td>
                      <span className={`status-badge status-badge--${invoice.status === 'paid' ? 'healthy' : invoice.status === 'pending' ? 'due' : 'overdue'}`}>
                        {invoice.status === 'paid' ? 'Paid' : 
                         invoice.status === 'pending' ? 'Pending' : 'Overdue'}
                      </span>
                    </td>
                    <td>
                      <button className={`btn ${invoice.status === 'overdue' ? 'btn--primary' : 'btn--secondary'} btn--sm`}>
                        {invoice.status === 'overdue' ? 'Remind' : invoice.status === 'pending' ? 'Send' : 'View'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Monthly Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-sm) 0', borderBottom: '1px solid var(--border-color)' }}>
              <span>Total Revenue</span>
              <strong>$12,450</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-sm) 0', borderBottom: '1px solid var(--border-color)' }}>
              <span>Paid Invoices</span>
              <strong>$9,120</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-sm) 0', borderBottom: '1px solid var(--border-color)' }}>
              <span>Pending</span>
              <strong>$2,330</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-sm) 0' }}>
              <span>Overdue</span>
              <strong style={{ color: 'var(--danger-color)' }}>$1,000</strong>
            </div>
          </div>
          <button className="btn btn--secondary w-full" style={{ marginTop: 'var(--spacing-md)' }}>
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
}
