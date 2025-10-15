class C1 {
}
class C2 {
}
function f3() {
    return f3;
}
for (let i5 = 0; i5 < 20000; i5++) {
    const v12 = {
        valueOf() {
            return i5;
        },
    };
    Reflect.construct(f3, []);
}
C1 = C2;
gc();
const v22 = {
    ["minor"](a19, a20, a21) {
    },
};
