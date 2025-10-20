function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            return a9;
        }
        function f13() {
            const v15 = Temporal.ZonedDateTime;
            v15.from({ day: 25, month: 2, timeZone: "Antarctica/McMurdo", year: 1820 }).toLocaleString();
            function f22() {
                return { done: true };
            }
            return { next: f22 };
        }
        const v26 = Symbol.iterator;
        f12.bind(null, ...{ [v26]: f13 });
    }
    new F5();
}
new F1(1820, 1820);
