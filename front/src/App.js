import logo from './logo.svg';
import './App.css';

function App() {
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

const link = document.querySelector('App-logo');

link.addEventListener('click', imageResume());

function imageResume() {
  const pdf = document.createElement('pdf');
  pdf.href = 'resume.pdf';
  pdf.download = 'Nirvek_Pandey_Resume.pdf';
  pdf.click();
}

export default App;
