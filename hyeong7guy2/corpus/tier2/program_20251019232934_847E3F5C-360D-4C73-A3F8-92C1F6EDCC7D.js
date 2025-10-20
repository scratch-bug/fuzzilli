function f2() {
    return 13n;
}
function f3() {
    const v6 = -9007199254740990n * -4294967297n;
    let v7 = v6 ** 13n;
    v7++;
    v7 % v6;
    function f10() {
        const v11 = {};
        v11.done = v11;
        return v11;
    }
    return { next: f10 };
}
const v13 = Symbol.iterator;
f2.bind(null, ...{ [v13]: f3 });
