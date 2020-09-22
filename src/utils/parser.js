export function formatDate(date, string = '-') {
    if(date){
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate() + 1),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join(string);
    }
}
export function formatHour(date){
    if(date) {
        let d = new Date(date)
        let h = d.getHours()
        let m = d.getMinutes()
        let s = d.getSeconds()
        let hour = [h, m, s].join(':')
        return hour
    }
}

export const formatHourDate = (date) => {
    if(date) {
        let d = new Date(date)
        let h = d.getHours()
        let m = d.getMinutes()
        let s = d.getSeconds()
        let hour = [h, m, s].join(':')
        let dateFormat = formatDate(date)
        return `${dateFormat} ${hour}`
    }
}

export const jsonToString = data => { return JSON.stringify(data) }

export const stringToJson = data => { return JSON.parse(data)}
