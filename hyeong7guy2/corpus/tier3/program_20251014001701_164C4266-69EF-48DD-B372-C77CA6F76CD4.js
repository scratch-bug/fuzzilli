function f0() {
    return f0;
}
const v2 = Array.prototype;
v2.flatMap.apply(v2, [f0]);
