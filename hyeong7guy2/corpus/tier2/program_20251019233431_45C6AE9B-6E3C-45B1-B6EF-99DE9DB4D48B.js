function f1() {
    return f1;
}
function f2() {
    function f3() {
        class C4 {
        }
        const v7 = /../g.compile("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b");
        for (const v8 of "0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b") {
            v8.split(v7, C4);
        }
        return { done: true };
    }
    return { next: f3 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
