function f3() {
    return 0.1067613417238541;
}
function f4() {
    function f5() {
        Error("Q3P5n").stack;
        return { done: true };
    }
    const v13 = {
        ["Q3P5n"]: 0.1067613417238541,
        set e(a12) {
        },
        next: f5,
    };
    return v13;
}
const v14 = Symbol.iterator;
f3.bind(null, ...{ [v14]: f4 });
