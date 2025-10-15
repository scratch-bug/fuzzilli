function f1() {
}
function f2() {
    function f3() {
        const v5 = class {
        }
        for (let v6 = 0; v6 < 1000; v6++) {
            for (let v7 = 0; v7 < 5; v7++) {
            }
            v5[4294967295] /= 0;
            v6 < 20000;
            v6++;
        }
        return { done: true };
    }
    return { next: f3 };
}
const v14 = Symbol.iterator;
f1.bind(null, ...{ [v14]: f2 });
