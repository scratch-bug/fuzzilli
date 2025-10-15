function f0(a1, a2) {
    if (a2) {
        const v3 = [];
        a1.concat(v3, a1, v3, v3);
    }
    a1?.[0] | 0;
}
const v9 = [100];
function f10() {
    v9[0] = 2.2;
    return Array;
}
const v14 = Symbol.species;
const v15 = { [v14]: f10 };
try { v9.constructor = v15; } catch (e) {}
for (let i17 = 0; i17 < 25000; i17++) {
    v9[0] = 100;
    try { f0(v9); } catch (e) {}
}
try { f0(v9, true); } catch (e) {}
