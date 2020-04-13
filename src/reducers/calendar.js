import DayPicker, { DateUtils } from 'react-day-picker';

const calendarReducer = (state = {"from": "", "to": ""}, action) => {
        switch (action.type) {
            case 'ADD_DATE':
                let range = DateUtils.addDayToRange(action.payload, state);
                return range;
            case 'RESET_CALENDAR':
                return {"from": "", "to": ""};
            default:
                return state
        }
    }
    
    export default calendarReducer