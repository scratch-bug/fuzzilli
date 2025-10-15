function f0() {
}
function f1() {
    return f1;
}
f1[Symbol.toPrimitive] = f0;
const v4 = `-63824`;
v4.blink(Symbol, v4).search(f1);
