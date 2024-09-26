import { useState } from 'react';
import CalendarDays from './CalendarDays';
import './calendar.css';
import { FaLessThan } from 'react-icons/fa6';

const Calendar = () => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [currentDay, setCurrentDay] = useState(new Date());

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  const nextMonth = () => {
    setCurrentDay(new Date(currentDay.setMonth(currentDay.getMonth() + 1)));
  };

  const previousMonth = () => {
    setCurrentDay(new Date(currentDay.setMonth(currentDay.getMonth() - 1)));
  };

  const nextMonthDate = new Date(currentDay);
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

  return (
    <div className="calendar bg-white rounded-xl px-8 py-4 w-full ">
      <div className="months-container">
        <div className="month">
          <div className="flex gap-4 px-4 font-medium text-lg text-[#5E5873]">
            <button onClick={previousMonth}>{'<'}</button>
            <button onClick={nextMonth}>{'>'}</button>
            <h2 className="">
              {months[currentDay.getMonth()]} {currentDay.getFullYear()}
            </h2>
          </div>
          <div className="grid grid-cols-7 ">
            {weekdays.map((weekday, index) => (
              <p>{weekday}</p>
            ))}
          </div>
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
