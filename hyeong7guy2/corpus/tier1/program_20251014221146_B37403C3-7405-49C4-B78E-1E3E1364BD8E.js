function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return f4;
    }
    function f5() {
        const v7 = Temporal.ZonedDateTime;
        try { new v7(475390698n, "-16:00", "-16:00"); } catch (e) {}
        function f10() {
            return { done: "-16:00" };
        }
        return { next: f10 };
    }
    const v13 = Symbol.iterator;
    f4.bind(null, ...{ [v13]: f5 });
}
new F1();
