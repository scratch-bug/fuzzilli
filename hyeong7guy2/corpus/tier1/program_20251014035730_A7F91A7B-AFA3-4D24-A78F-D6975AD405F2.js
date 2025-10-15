const v13 = {
    construct(a2, a3) {
        function F4() {
            if (!new.target) { throw 'must be called with new'; }
            Float32Array[Symbol.toPrimitive] = Symbol;
            function f9() {
                return a3;
            }
            class C10 extends f9 {
                static [Float32Array] = "78kBW";
            }
        }
        new F4();
        return Reflect;
    },
};
function f15() {
    return Symbol;
}
const v16 = new Proxy(f15, v13);
for (let v17 = 0; v17 < 5; v17++) {
    Reflect.construct(v16, v13);
}
