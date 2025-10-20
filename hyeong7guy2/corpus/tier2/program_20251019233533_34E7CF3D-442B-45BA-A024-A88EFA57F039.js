const v0 = [-16,5];
const v11 = {
    construct(a2, a3) {
        function f5() {
            const v6 = [536870912,256,127,4294967296];
            v6[1] = v6;
            for (let v7 = 0; v7 < 250; v7++) {
                v6[v7 * v7] = v7;
            }
        }
        Object.defineProperty(Uint8Array, "toString", { writable: true, enumerable: true, value: f5 });
        ("NFC").concat(Uint8Array);
        return a3;
    },
};
function f13() {
    return f13;
}
const v14 = new Proxy(f13, v11);
Reflect.construct(v14, v0);
