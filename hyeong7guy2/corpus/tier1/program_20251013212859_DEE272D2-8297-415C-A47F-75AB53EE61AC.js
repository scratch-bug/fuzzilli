function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = {};
    for (let v3 = 0; v3 < 100; v3++) {
        v2.a = v3;
    }
}
const v4 = new F0();
const v16 = {
    construct(a6, a7) {
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                return v4;
            }
            class C13 extends f12 {
                static [Float32Array] = "78kBW";
            }
        }
        new F8();
        return Reflect;
    },
};
function f18() {
    return f18;
}
const v19 = new Proxy(f18, v16);
for (let v20 = 0; v20 < 10; v20++) {
    Reflect.construct(v19, v16);
}
