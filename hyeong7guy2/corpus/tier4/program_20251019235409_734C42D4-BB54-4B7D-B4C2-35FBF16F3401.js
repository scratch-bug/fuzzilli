const v7 = {
    [Symbol]() {
        const v6 = {
            next() {
                return ("MIN_SAFE_INTEGER")["🙌🏿"];
            },
        };
    },
};
const v8 = [1000000000.0,1000.0,4.0];
function f9() {
    return 0;
}
v8.toString = f9;
function f11() {
    return v8;
}
class C12 extends f11 {
}
const v13 = new C12();
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = Intl.Collator;
const v20 = {};
v20.numeric = F14;
v18("trv", v20).compare(F14, v13);
