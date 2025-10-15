function f1(a2) {
    const v4 = { __proto__: ArrayBuffer };
    v4.maxByteLength = v4;
    new ArrayBuffer(14, v4);
    return f1;
}
Uint8Array.toString = f1;
const v7 = [0.9145860745423072,NaN,8.649005406608798e+307,-3.0,1e-15,-914669.6294644701,-2.2250738585072014e-308,0.16678698727721653];
try { v7.with(Uint8Array); } catch (e) {}
