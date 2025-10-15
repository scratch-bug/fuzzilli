function f0(a1, a2) {
    if (a1[0] === 1.1) {
        a1[0] = 2;
    }
    return f0;
}
let v8 = [1];
function f9() {
}
const dummy = f9;
for (let i12 = 0; i12 < 30000; i12++) {
    f0(v8, dummy);
    let v19 = 10;
    const v22 = {
        next() {
            v19--;
            return v19;
        },
    };
    v8 = [1];
}
