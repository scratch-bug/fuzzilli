function f0(a1) {
    const v2 = `
        function f3() {
            return v2;
        }
    `;
    return v2;
}
Uint32Array[Symbol.toPrimitive] = f0;
try { JSON.parse(Uint32Array); } catch (e) {}
