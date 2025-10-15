function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2(a3, a4, a5) {
    a4[192635997] = C1;
    return a4;
}
new Promise(f2);
