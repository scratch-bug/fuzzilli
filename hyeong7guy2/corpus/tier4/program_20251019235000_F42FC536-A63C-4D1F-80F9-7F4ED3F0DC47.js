const v2 = {};
const v4 = [257820.71758485283,-2.6364148594607606,1.1821703597372879e+308,Infinity,-1000000.0];
for (let i6 = 0;
    (() => {
        for (const v7 in v2) {
            v4[v7] %= i6;
        }
        return i6 < 25000;
    })();
    ++i6) {
}
function f14() {
    const t12 = Temporal.Duration;
    const v17 = new t12();
    return v17.toLocaleString(-52999, "");
}
Uint32Array[Symbol.toPrimitive] = f14;
try { JSON.rawJSON(Uint32Array); } catch (e) {}
