function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        return a2;
    }
    let v8 = -536870912;
    for (let i10 = 0;
        i10 < 1000;
        (() => {
            i10++;
            function F15() {
                if (!new.target) { throw 'must be called with new'; }
                v8++;
            }
            new F15();
        })()) {
    }
    return a2;
}
const v23 = new Worker(f0, { type: "function" });
v23.getMessage();
