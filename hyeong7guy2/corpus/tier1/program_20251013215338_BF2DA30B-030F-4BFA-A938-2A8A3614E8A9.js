function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
new F1();
function f7() {
}
const v8 = class extends f7 {
}
const v12 = {
    [Symbol]() {
    },
};
const v13 = [4];
v13.h = v12;
for (let i16 = 0; i16 < 100000; ++i16) {
}
v13.h = 0;
undefined ?? undefined;
new Proxy(Symbol, {});
Symbol.iterator;
for (let i34 = 0;
    (() => {
        const v36 = i34 < 20000;
        v36 || v36;
        return v36;
    })();
    i34++) {
}
for (let v41 = 0; v41 < 5; v41++) {
    v41++;
}
