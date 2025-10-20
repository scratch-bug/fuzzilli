function f0(a1, a2, a3) {
    function f6() {
        return Array;
    }
    for (let i9 = 0;
        i9 < 20000;
        (() => {
            ++i9;
            Date["p" + 10] = 10;
        })()) {
    }
    function f18() {
        function f19() {
            return Array(1048576).toString();
        }
        return { next: f19 };
    }
    const v24 = Symbol.iterator;
    f6.bind(null, ...{ [v24]: f18 });
    return f6;
}
const v31 = new Worker(f0, { type: "function" });
v31.getMessage();
