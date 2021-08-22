import React from 'react'
import { Route } from "react-router-dom";

import './App.css';
import { HowAreYou, Dashboard, Calendar, Diary, Discover, Account, Liked, Bookmark, Setting } from './components';

export default function App() {

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
