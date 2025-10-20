function f2() {
}
function f3() {
    function f4() {
        with (d8) {
            const t5 = test.FastCAPI;
            new t5();
        }
        const v9 = {};
        for (let i11 = 0;
            i11 !== 20000;
            (() => {
                for (let [v15,,v16,...v17] of "p") {
                    v17[250] = v17;
                }
                i11++;
            })()) {
        }
        return { done: v9 };
    }
    return { next: f4 };
}
const v22 = Symbol.iterator;
f2.bind(null, ...{ [v22]: f3 });
