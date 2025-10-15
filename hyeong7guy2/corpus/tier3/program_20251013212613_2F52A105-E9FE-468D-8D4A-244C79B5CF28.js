const v2 = class {
    [1](a4) {
    }
}
const v5 = new v2();
v5[1];
const v7 = new v2();
v7[1] = v7;
try { Array(Infinity); } catch (e) {}
