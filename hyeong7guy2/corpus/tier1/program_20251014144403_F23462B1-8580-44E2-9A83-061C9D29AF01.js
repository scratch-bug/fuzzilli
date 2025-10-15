function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return 475390698n;
    }
    function f5() {
        const v7 = Temporal.ZonedDateTime;
        try { new v7(475390698n, "-16:00", v7); } catch (e) {}
        function f10() {
            return { done: true };
        }
        return { next: f10 };
    }
    const v14 = Symbol.iterator;
    f4.bind(null, ...{ [v14]: f5 });
}
new F1();
