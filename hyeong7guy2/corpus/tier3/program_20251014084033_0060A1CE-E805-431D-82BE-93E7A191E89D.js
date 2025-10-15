const v1 = class extends Int16Array {
}
const v2 = new v1();
function f3() {
    return Error().stack;
}
f3.call(v2);
