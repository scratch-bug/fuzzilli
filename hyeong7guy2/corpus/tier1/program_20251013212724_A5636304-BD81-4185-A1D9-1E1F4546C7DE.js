class C1 {
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
F2.toJSON = C1;
for (let v5 = 0; v5 < 5; v5++) {
    Symbol[Symbol.toPrimitive] = Symbol;
    const v8 = {
        [Symbol]() {
        },
    };
}
