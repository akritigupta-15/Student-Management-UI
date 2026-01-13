
import { BrowserRouter } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return ( 
    <BrowserRouter>
      <Toaster/>   
       <SignUpPage />
    </BrowserRouter>
    
   );
}
 
export default App;