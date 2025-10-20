function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = [0.2010690363443811,-Infinity,0.9158909645647652,-1000.0,2.2250738585072014e-308,3.0,0.15822631767543982];
function f4(a5) {
    return F0;
}
v3.toString = f4;
function F6() {
    if (!new.target) { throw 'must be called with new'; }
}
F6.direction = v3;
function f9() {
    return F6;
}
function f10() {
    const v12 = Temporal.ZonedDateTime;
    const v17 = v12.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 });
    try { v17.getTimeZoneTransition(F6); } catch (e) {}
    function f19() {
        return { done: true };
    }
    return { next: f19 };
}
const v23 = Symbol.iterator;
f9.bind(null, ...{ [v23]: f10 });
