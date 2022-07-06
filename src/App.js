import { useState } from "react";
import "./styles.css";

export default function App() {
  const [job, setJob] = useState(() => "");
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("jobs")) ?? [];
  });

  const hanldeSubmit = () => {
    setJobs((prev) => {
      const StorageJob = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(StorageJob));

      setJob("");

      return StorageJob;
    });
  };
  return (
    <div className="App">
      <ul>
        <input
          value={job}
          onChange={(e) => {
            setJob(e.target.value);
          }}
        />
        <button onClick={hanldeSubmit}>Add</button>
        {jobs.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
