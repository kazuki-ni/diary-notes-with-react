import { Component } from "react";
import { Route } from "react-router-dom";

import './App.css';

import HowAreYou from "./components/pages/howareyou/HowAreYou";

import Dashboard from "./components/pages/dashboard/Dashboard"
import Calendar from "./components/pages/calendar/Calendar"
import Diary from "./components/pages/diary/Diary"
import Discover from "./components/pages/discover/Discover"
import Account from "./components/pages/account/Account"
import Liked from "./components/pages/liked/Liked"
import Bookmark from "./components/pages/bookmark/Bookmark"
import Setting from "./components/pages/setting/Setting"

import { today_date } from "src/components/pages/calendar/calendarVariables";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "Normal",
      date: today_date
    }
  console.log(this.state)
  }

  render() {
    return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/howareyou" component={HowAreYou} />

      {/* For when directly come to this page by url*/}
      <Route exact path="/diary" component={Diary} />
      <Route path="/diary/:date" component={Diary} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/discover" component={Discover} />
      <Route path="/account" component={Account} />
      <Route path="/liked" component={Liked} />
      <Route path="/bookmark" component={Bookmark} />
      <Route path="/setting" component={Setting} />
    </div>
    )
  }
}

export default App;
