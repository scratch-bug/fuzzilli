const v2 = class {
}
class C3 extends v2 {
}
for (let v7 = 0; v7 < 250; v7++) {
    v7++;
    C3.propertyIsEnumerable();
    let v13 = 10;
    for (; v13--;) {
        delete Object.prototype;
        const v18 = Symbol.iterator;
        const v21 = {
            [v18]() {
            },
        };
    }
    const v22 = class {
    }
    try { v22(); } catch (e) {}
    const v24 = new v22();
    (typeof v24)[1];
    [1];
}
const v29 = {};
