function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        for (let v4 = 0; v4 < 5; v4++) {
            ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match(RegExp.lastParen);
        }
        return { done: true };
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
