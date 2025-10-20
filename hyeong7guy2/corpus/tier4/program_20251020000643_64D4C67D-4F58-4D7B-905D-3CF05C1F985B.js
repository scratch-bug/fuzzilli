function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = class extends C1 {
}
for (let i4 = 0; i4 < 25000;) {
    function f9() {
    }
    for (let v10 = 0; v10 < 5; v10++) {
        for (let [i14, i15] = (() => {
                v10++;
                return [0, 10];
            })();
            i14;
            ) {
        }
        ++i4;
    }
}
