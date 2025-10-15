function f1() {
}
const v2 = class extends f1 {
}
const t4 = 127;
t4.__proto__ = v2;
for (let i4 = 0; i4 < 25000; ++i4) {
    let v10 = 4.4;
    for (let v11 = 0; v11 < 5; v11++) {
        ++v10;
    }
}
