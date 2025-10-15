class C0 {
}
class C1 extends C0 {
}
function f2() {
    for (let i4 = 0; i4 < 10000; i4++) {
    }
}
new Worker(f2, { type: "function" });
let v17 = -9007199254740992;
for (let i19 = 0;
    i19 < 20000;
    (() => {
        i19++;
        const v24 = -9232 > v17;
        switch (v24) {
            case v24:
                break;
        }
    })()) {
}
const v26 = class {
    #valueOf(a28) {
    }
}
v17++;
for (let v31 = 0; v31 < 10; v31++) {
}
