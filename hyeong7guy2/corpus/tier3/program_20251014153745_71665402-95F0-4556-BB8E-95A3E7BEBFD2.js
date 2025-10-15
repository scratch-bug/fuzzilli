function f0(a1, a2) {
    a1.concat();
    return f0;
}
const v5 = [100,100,100,100];
const v7 = Symbol.species;
v5.constructor = { [v7]: 100 };
try { f0(v5); } catch (e) {}
