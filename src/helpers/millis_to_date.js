export default function millis_to_date(time) {
    const date = new Date(parseInt(time))

    return date.toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }) + " " + date.toLocaleTimeString('ru-RU', {timeStyle: "short"})
}