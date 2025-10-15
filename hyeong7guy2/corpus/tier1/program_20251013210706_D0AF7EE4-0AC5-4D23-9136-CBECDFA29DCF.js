function f0() {
    return f0;
}
for (let i2 = 0; i2 < 20000; i2++) {
    f0.bind(null, i2);
}
let done = false;
function f12() {
    function f13() {
        if (!done) {
            new Array(1048576);
        }
        return { done: true, value: 0 };
    }
    return { next: f13 };
}
const v23 = Symbol.iterator;
const it = { [v23]: f12 };
f0.bind(null, ...it);
