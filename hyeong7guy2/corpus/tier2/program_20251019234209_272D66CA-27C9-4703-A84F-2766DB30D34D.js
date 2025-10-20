function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v8 = 6;
            v8++;
            const v11 = Temporal.ZonedDateTime;
            return v11.from({ day: 25, month: 1073741824, timeZone: "+11:00", year: v8 }).toLocaleString();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
