import React from "react";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

import "./calendar.scss";
import CalendarHeader from "./components/CalendarHeader";
import WeekDaysTitle from "./components/WeekDaysTitle";
import Days from "./components/Days";
import MonthSelector from "./components/MonthSelector";
import YearSelector from "./components/YearSelector";

function Calendar() {
  //* State
  const year = useSelector( state => state.calendarDateReducer.year );
  const month = useSelector( state => state.calendarDateReducer.month );
  const date = useSelector( state => state.calendarDateReducer.date );
  console.log(date, year, month+1)
  const displayMonthSelector = useSelector( state => state.calendarSelectorReducer.displayMonthSelector )
  const displayYearSelector = useSelector( state => state.calendarSelectorReducer.displayYearSelector )

  return (
    <div className="container">

      <div className="calendar">
        {(
          !displayMonthSelector &&
          !displayYearSelector) && (
            <CalendarHeader />
        )}
        {(
          !displayMonthSelector &&
          !displayYearSelector) && (
            <WeekDaysTitle />
        )}
        {(
          !displayMonthSelector &&
          !displayYearSelector) && (
            <Days />
        )}
      </div>

      {displayMonthSelector && (
        <MonthSelector />
      )}

      {displayYearSelector && (
        <YearSelector />
      )}

      <div className="dummy-box"></div>

    </div>

  )
}

export default withRouter(Calendar);