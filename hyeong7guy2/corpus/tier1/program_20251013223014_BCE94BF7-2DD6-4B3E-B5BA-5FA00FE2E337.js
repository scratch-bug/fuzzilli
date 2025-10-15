function f0() {
    return f0;
}
function f1() {
    function f2() {
        function f4(a5, a6) {
            return f4;
        }
        for (let i8 = 0;
            i8 < 20000;
            (() => {
                const v12 = i8++;
                v12 | v12;
                new Uint16Array();
            })()) {
            const v17 = {};
            f4(f2, f4);
        }
        return { done: true };
    }
    return { next: f2 };
}
const v22 = Symbol.iterator;
f0.bind(null, ...{ [v22]: f1 });
