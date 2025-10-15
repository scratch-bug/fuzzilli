const v2 = Array.prototype;
function f3(a4) {
    a4["valueOf"]();
}
v2[Symbol.toPrimitive] = f3;
const v8 = [];
function f9(a10) {
}
const v16 = {
    [v8](a12, a13, a14, a15) {
    },
};
function f17(a18, a19) {
    const t13 = a18[0];
    t13.valueOf = f9;
}
function f21() {
}
f21.toString = f17;
for (let v22 = 0; v22 < 10; v22++) {
    f17([1]);
}
