function f1(a2) {
}
const v3 = class extends f1 {
    ["0"];
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = {
        [v3](a7, a8) {
        },
    };
    const t11 = JSON.stringify;
    t11(v9);
    for (let i15 = 0, i16 = 10; i16; i16--) {
    }
}
new F4();
