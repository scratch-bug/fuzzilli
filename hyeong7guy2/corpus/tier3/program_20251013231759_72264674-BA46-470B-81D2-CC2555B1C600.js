function f0(a1, a2) {
    return a1.concat(f0, f0, a1);
}
const v4 = [f0,f0,f0,f0,f0];
const v6 = Symbol.species;
const v8 = {
    [v6]() {
    },
};
v4.constructor = v8;
try { f0(v4); } catch (e) {}
