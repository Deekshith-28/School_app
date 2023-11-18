import Marks from "./Component/Marks";
import Student from "./Component/Student";
import Teacher from "./Component/Teacher";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h2 class="navbar-brand">School App</h2>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/student"><h4 class="nav-item nav-link">Student</h4></Link>
            <Link to="/teacher"><h4 class="nav-item nav-link">Teacher</h4></Link>
            <Link to="/marks"><h4 class="nav-item nav-link">Marks</h4></Link>

          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/student" element={<Student></Student>}></Route>
        <Route path="/teacher" element={<Teacher></Teacher>}></Route>
        <Route path="/marks" element={<Marks></Marks>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
