function f0(a1, a2) {
    a1.concat();
    return f0;
}
const v4 = [f0,f0,f0,f0,f0];
const v6 = Symbol.species;
v4.constructor = { [v6]: Symbol };
try { f0(v4); } catch (e) {}
