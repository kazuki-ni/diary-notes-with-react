import { Route } from "react-router-dom";

import './App.css';

import HowAreYou from "./components/pages/howareyou/HowAreYou";

import Dashboard from "./components/pages/Dashboard"
import Calendar from "./components/pages/Calendar"
import Diary from "./components/pages/Diary"
import Discover from "./components/pages/Discover"
import Account from "./components/pages/Account"
import Liked from "./components/pages/Liked"
import Setting from "./components/pages/Setting"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard}></Route>
      <Route path="/calendar" component={Calendar}></Route>
      <Route exact path="/diary" component={HowAreYou}></Route>
      <Route path="/diary/:mood" component={Diary}></Route>
      <Route path="/discover" component={Discover}></Route>
      <Route path="/account" component={Account}></Route>
      <Route path="/liked" component={Liked}></Route>
      <Route path="/setting" component={Setting}></Route>
    </div>
  );
}

export default App;
