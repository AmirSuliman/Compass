const CalendarDays = ({ day, changeCurrentDay }) => {
  const firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  const tempDate = new Date(firstDayOfMonth);
  tempDate.setDate(tempDate.getDate() - weekdayOfFirstDay);

  for (let i = 0; i < 42; i++) {
    const calendarDay = {
      currentMonth: tempDate.getMonth() === day.getMonth(),
      date: new Date(tempDate),
      month: tempDate.getMonth(),
      number: tempDate.getDate(),
      selected: tempDate.toDateString() === day.toDateString(),
      year: tempDate.getFullYear(),
    };

    currentDays.push(calendarDay);
    tempDate.setDate(tempDate.getDate() + 1);
  }

  return (
    <div className="grid grid-cols-7">
      {currentDays.map((day, index) => (
        <div
          className={
            'calendar-day' +
            (day.currentMonth ? ' current' : '') +
            (day.selected ? ' selected' : '')
          }
          key={index}
          onClick={() => changeCurrentDay(day)}
        >
          <p>{day.number}</p>
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
