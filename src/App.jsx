import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Userside/login";
import Signup from "./Pages/Userside/signup";
import Forgotpassword from "./Pages/Userside/forgotpsaaword";
import Resetpassword from "./Pages/Userside/resetpassword";
import DescribeQuestion from "./Pages/Userside/questions/describebest";
import BusinessQuestion from "./Pages/Userside/questions/business";
import NoofpeopleQuestion from "./Pages/Userside/questions/noofpeople";
import RoleQuestion from "./Pages/Userside/questions/role";
import Sizeofcompany from "./Pages/Userside/questions/sizeofcompany";
import Connecttools from "./Pages/Userside/connecttools";
import Savedcontent from "./Pages/Userside/dashboard/savedcontent";
import Connections from "./Pages/Userside/dashboard/connections";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword/>} />
        <Route path="/reset-password" element={<Resetpassword/>} />
        <Route path="/question" element={<DescribeQuestion/>}/>
        <Route path="/Busniess" element={<BusinessQuestion/>}/>
        <Route path="/people" element={<NoofpeopleQuestion/>}/>
        <Route path="/role" element={<RoleQuestion/>}/>
        <Route path="/companysize" element={<Sizeofcompany/>}/>
        <Route path="/connect-tools" element={<Connecttools/>}/>
        <Route path="/saved-content" element={<Savedcontent/>}/>
        <Route path="/connections" element={<Connections />}/>

      </Routes>
    </Router>
  );
};

export default App;
