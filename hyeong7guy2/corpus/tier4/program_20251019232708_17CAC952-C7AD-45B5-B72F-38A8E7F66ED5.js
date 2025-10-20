try {
    function f2() {
        return f2;
    }
    function f3() {
        const v5 = Temporal.PlainDateTime;
        const v6 = { year: 9223372036854775807 };
        v5.from(v6, { overflow: "reject" });
        return Temporal;
    }
    const v10 = Symbol.iterator;
    f2.bind(null, ...{ [v10]: f3 });
} catch(e14) {
}
