// DEPENDENCIES
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import EditTransaction from "./Pages/editTransaction";
import FourOFour from "./Pages/fourOFour";
import Home from "./Pages/home";
import Index from "./Pages/index";
import NewTransaction from "./Pages/newTransaction";
import ShowTransaction from "./Pages/showTransaction";

// COMPONENTS
import { Card, CardContent, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./Components/navBar";
import { Container } from "@mui/system";

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Router>
        <NavBar />
        <main>
          <div>
            <Container>
              <Card
                style={{ maxWidth: 750, margin: "0 auto", padding: "20px 5px" }}
              >
                <CardContent>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/transactions' element={<Index />} />
                    <Route
                      path='/transactions/new'
                      element={<NewTransaction />}
                    />
                    <Route
                      path='/transactions/:index'
                      element={<ShowTransaction />}
                    />
                    <Route
                      path='/transactions/:index/edit'
                      element={<EditTransaction />}
                    />
                    <Route path='*' element={<FourOFour />} />
                  </Routes>
                </CardContent>
              </Card>
            </Container>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
