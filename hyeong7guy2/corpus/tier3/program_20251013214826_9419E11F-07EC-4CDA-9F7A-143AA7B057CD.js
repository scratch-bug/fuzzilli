function f1() {
    return f1;
}
Int32Array.constructor = f1;
const t4 = Int32Array.constructor;
t4.prototype = Int32Array;
