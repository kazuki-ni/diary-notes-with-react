import React, { Component } from "react";
import { withRouter } from "react-router";

import "./calendar.css";
import{ CalendarHeader, WeekDaysTitle, Days, MonthSelector, YearSelector } from "./CalendarDOMs"

class Calendar extends Component {

  constructor(props) {
    super(props);

    const now = new Date();
    const date = new Date(now.getFullYear(), now.getMonth(), 1);
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date,
      displayMonthSelector: false,
      displayYearSelector: false
    }

  }

  setMonth = (newMonth) => {
    this.setState( () => {
      const newDate = new Date(this.state.year, newMonth, 1);
      console.log(newDate);
      return {
        year: newDate.getFullYear(),
        month: newDate.getMonth(),
        date: newDate
      };
    });
  };

  yearClicked = (year) => {
    this.setState(
      () => ({ displayYearSelector: false }),
      () => this.setState( {year: year} )
    );
  }

  monthClicked = (month) => {
    this.setState(
      () => ({ displayMonthSelector: false }),
      () => this.setMonth(month)
    );
  }

  dayClicked = (day) => {
    const date =
      this.state.year+
      "_"+
      ( '00' + (this.state.month+1) ).slice( -2 )+
      ( '00' + day ).slice( -2 )

    this.props.dateChanged(date)
    this.props.history.push('/howareyou')
  }

  yearHandler = () => {
    this.setState( () => ({
      displayYearSelector: true
    }))
  }

  monthHandler = () => {
    this.setState( () => ({
      displayMonthSelector: true
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="calendar">

          {(
            !this.state.displayMonthSelector &&
            !this.state.displayYearSelector) && (
              <CalendarHeader
                year={this.state.year}
                month={this.state.month}
                setMonth={this.setMonth}
                yearHandler={this.yearHandler}
                monthHandler={this.monthHandler}
              />
          )}

          {(
            !this.state.displayMonthSelector &&
            !this.state.displayYearSelector) && (
              <WeekDaysTitle />
          )}

          {(
            !this.state.displayMonthSelector &&
            !this.state.displayYearSelector) && (
              <Days
                month={this.state.month}
                date={this.state.date}
                dayClicked={this.dayClicked}
              />
          )}

        </div>

        {this.state.displayMonthSelector && (
          <MonthSelector
            month={this.state.month}
            monthClicked={this.monthClicked}
          />
        )}

        {this.state.displayYearSelector && (
          <YearSelector
            year={this.state.year}
            yearClicked={this.yearClicked}
          />
        )}

        <div className="dummy-box"></div>

      </div>

    )
  }
}

export default withRouter(Calendar);