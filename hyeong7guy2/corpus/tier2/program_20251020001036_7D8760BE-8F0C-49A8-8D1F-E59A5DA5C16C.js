function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        class C4 {
        }
        const v6 = /../g;
        for (const v7 of "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b") {
            v7.split(v6, C4);
        }
        return { done: f2 };
    }
    return { next: f3 };
}
const v11 = Symbol.iterator;
f1.bind(null, ...{ [v11]: f2 });
