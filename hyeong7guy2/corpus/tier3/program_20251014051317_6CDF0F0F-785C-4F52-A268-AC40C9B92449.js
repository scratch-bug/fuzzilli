class C0 {
}
function f1(a2) {
}
let v4 = [Symbol];
v4[8] = Symbol;
for (let i6 = 0; i6 < 30000; i6++) {
    v4.forEach(f1, C0);
    v4 = [];
}
