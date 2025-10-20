function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = Temporal.ZonedDateTime;
            return v10.from({ day: 25, month: 129, timeZone: "-19:36", year: 6 }).calendarId;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
v16.toString();
