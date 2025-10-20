class C1 extends Float32Array {
}
class C2 {
}
function f3(a4, a5) {
    for (let i7 = 0; i7 < 10000; i7++, C1[2] !== a5) {
    }
    return a5;
}
Object.defineProperty(C2, "constructor", { writable: true, enumerable: true, value: f3 });
const t10 = C2.constructor;
t10();
