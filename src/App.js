import { Component } from "react";
import { Route } from "react-router-dom";

import './App.css';

import HowAreYou from "./components/pages/howareyou/HowAreYou";

import Dashboard from "./components/pages/Dashboard"
import Calendar from "./components/pages/calendar/Calendar"
import Diary from "./components/pages/diary/Diary"
import Discover from "./components/pages/Discover"
import Account from "./components/pages/Account"
import Liked from "./components/pages/Liked"
import Bookmark from "./components/pages/Bookmark"
import Setting from "./components/pages/Setting"

import { today_date } from "src/components/pages/calendar/CalendarVariables";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "Normal",
      date: today_date
    }
  console.log(this.state)
  }

  moodHandler = (mood) => {
    console.log("Mood: " + mood)
    this.setState({ mood: mood })
  }

  dateChanged = (date) => {
    console.log("Date Changed to " + date)
    this.setState({ date: date })
  }

  render() {
    return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route
        path="/howareyou"
        render={ () =>
          <HowAreYou
            moodHandler={this.moodHandler}
            date={this.state.date}
          />
        }
      />

      {/* For when directly come to this page by url*/}
      <Route
        exact path="/diary"
        render={ () =>
          <Diary
            date={this.state.date}
            mood={this.state.mood}
          />
        }
      />
      <Route
        path="/diary/:date"
        render={ () =>
          <Diary
            date={this.state.date}
            mood={this.state.mood}
          />
        }
      />
      <Route
        path="/calendar"
        render={ () =>
          <Calendar
            dateChanged={this.dateChanged}
          />
        }
      />

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
