import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import UserCard from './components/UserCard'; // Import UserCard component

// Welcome page component
function WelcomePage() {
  return <h1>Welcome to the App!</h1>;
}

function App() {
  const url = "http://localhost:8080/product";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <a href="/">Welcome</a>
            </li>
            <li>
              <a href="/users">Data</a>
            </li>
          </ul>
        </nav> */}
        <nav style={{ display: 'flex', alignItems: 'center', padding: '1rem 2rem', margin: 0, backgroundColor: '#545454'}}>
          <h1 className="logo" style={{ fontSize: '1.5rem', color: 'white' }}>My App</h1>  {/* Added a logo */}
          <ul style={{ display: 'flex', listStyle: 'none', marginLeft: 20, padding: 0 }}> {/* Removed unnecessary styles */}
            <li style={{ marginRight: '1rem' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </li>
            <li>
              <Link to="/users" style={{ textDecoration: 'none', color: 'white' }}>Data</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/users"
            element={
              <div>
                <center>
                  <h1 style={{ color: "#3d594c" }}>using JavaScript inbuilt FETCH API</h1>
                  {/* {data.map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))} */}
                  {/* {data.map((user) => (
                    <p>user[0]</p>
                  ))} */}
                    {/* {data.map((product) => (
                      <li>
                        products[0].ID
                      </li>
                    ))} */}
                    {/* {data.length === 0 ? (
                      <p>Loading products...</p>
                    ) : (
                      <ul>
                        <li>{data.products[0].ID}</li>
                        <li>{data.products[1].ID}</li>
                      </ul>
                    )} */}
                    {data.length === 0 ? (
                      <p>Loading products...</p>
                    ) : (
                      <ul>
                        {data.products.map(product => (
                          <li key={product.ID}>{product.ID}</li>
                        ))}
                      </ul>
                    )}
                </center>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;