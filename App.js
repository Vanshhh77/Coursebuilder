// App.js
import React from 'react';
import CourseBuilder from './components/CourseBuilder';
import './App.css'

function App() {
  return (
    <div className="App">
      <main>
        <CourseBuilder />
      </main>
      <footer>
        {/* Footer content if needed */}
      </footer>
    </div>
  );
}

export default App;

