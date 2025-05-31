import { useState } from 'react';

export default function Messages() {
  const [activeThread, setActiveThread] = useState(1);

  const threads = [
    { id: 1, name: 'Sarah Johnson', time: '2:30 PM', preview: 'Thank you for the great care with Buddy today...', active: true },
    { id: 2, name: 'Mike Chen', time: '1:15 PM', preview: 'When is Luna\'s next appointment due?', active: false },
    { id: 3, name: 'Emily Davis', time: '11:45 AM', preview: 'Max seems to be feeling much better...', active: false },
    { id: 4, name: 'Tom Wilson', time: 'Yesterday', preview: 'Can we schedule Bella\'s grooming?', active: false }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <h2>Messages & Documents</h2>
        <button className="btn btn--primary">
          <i className="fas fa-plus"></i>
          New Message
        </button>
      </div>

      <div className="messages">
        <div className="messages__sidebar">
          {threads.map(thread => (
            <div 
              key={thread.id}
              className={`message-thread ${activeThread === thread.id ? 'message-thread--active' : ''}`}
              onClick={() => setActiveThread(thread.id)}
            >
              <div className="message-thread__header">
                <div className="message-thread__name">{thread.name}</div>
                <div className="message-thread__time">{thread.time}</div>
              </div>
              <div className="message-thread__preview">{thread.preview}</div>
            </div>
          ))}
        </div>
        
        <div className="messages__chat">
          <div className="chat-header">
            <h3>Sarah Johnson</h3>
            <p className="text-muted">Owner of Buddy (Golden Retriever)</p>
          </div>
          <div className="chat-messages">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div style={{ background: 'var(--bg-light)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius)', alignSelf: 'flex-start', maxWidth: '70%' }}>
                <p>Hi Dr. Doe, thank you for the excellent care with Buddy today. He seems much more energetic after the checkup!</p>
                <small className="text-muted">2:30 PM</small>
              </div>
              <div style={{ background: 'var(--primary-color)', color: 'white', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius)', alignSelf: 'flex-end', maxWidth: '70%' }}>
                <p>You're very welcome! Buddy is such a good patient. Don't forget his next vaccination is due in 6 months. I'll send you a reminder.</p>
                <small style={{ opacity: '0.8' }}>2:35 PM</small>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: 'var(--spacing-md)', borderRadius: 'var(--border-radius)', alignSelf: 'flex-start', maxWidth: '70%' }}>
                <p>Perfect! Also, I wanted to share these photos from our walk today. He's so happy! 📸</p>
                <small className="text-muted">2:37 PM</small>
              </div>
            </div>
          </div>
          <div className="chat-input">
            <input type="text" className="chat-input__field" placeholder="Type your message..." />
            <button className="btn btn--primary">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--spacing-xl)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-md)' }}>File Sharing</h3>
        <div className="file-upload">
          <div className="file-upload__icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <div className="file-upload__text">
            <strong>Click to upload or drag and drop</strong><br />
            Medical records, photos, or documents (PDF, JPG, PNG)
          </div>
        </div>
      </div>
    </div>
  );
}
