import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { add_date, reset_calendar } from './actions';


export default function Calendar(props) {
  const dispatch = useDispatch();
  const { from, to } = useSelector(state => state.calendar)

    const modifiers = { start: from, end: to };
    
    return (
      <div className="calendar1">
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {/* {from &&
            to &&
            `You have selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '} */}
          {from && to && (
            <button className="link" onClick={() => dispatch(reset_calendar())}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={(day) => dispatch(add_date(day))}
        />
        
        <Helmet>
          <style>{`
            .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
              background-color: #f0f8ff !important;
              color: #4a90e2;
            }
            .Selectable .DayPicker-Day {
              border-radius: 0 !important;
            }
            .Selectable .DayPicker-Day--start {
              border-top-left-radius: 50% !important;
              border-bottom-left-radius: 50% !important;
            }
            .Selectable .DayPicker-Day--end {
              border-top-right-radius: 50% !important;
              border-bottom-right-radius: 50% !important;
            }
          `}
          </style>
        </Helmet>

  
      </div>
    );
}