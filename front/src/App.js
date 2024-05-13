import logo from './logo.svg';
import './App.css';

function App() {
  const handleImageResume = () => {
    const pdf = document.createElement('a');
    pdf.href = 'resume.pdf';
    pdf.download = 'Nirvek_Pandey_Resume.pdf';
    pdf.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Under Construction</code>.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/nirvekpandey/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me on Linkedin for more info
        </a>
      </header>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const link = document.querySelector('.App-logo');
  link.addEventListener('click', handleImageResume);
});

export default App;
