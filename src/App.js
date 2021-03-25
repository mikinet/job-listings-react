import "./App.css";
import jobListings from "./data.json";
import JobListing from "./JobListing";

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <img src="./images/bg-header-desktop.svg" alt="header background" />
      </header>
      <div className="container">
        {jobListings.map((jobListing, index) => {
          return <JobListing key={index} listing={jobListing} />;
        })}
      </div>
    </div>
  );
}

export default App;
