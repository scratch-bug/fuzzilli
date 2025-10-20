const v22 = {
    construct(a1, a2) {
        function f3(a4, a5) {
            function F6(a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
                const v11 = [0.39346707945810944,-991803.8963643727];
                for (let i13 = 0; i13 < 100000; ++i13) {
                    v11[15] |= 256;
                }
            }
            const v19 = new F6(a1, f3);
            return v19;
        }
        a1.toString = f3;
        a1.toString(this, a1);
        return Reflect;
    },
};
function f24() {
    return v22;
}
const v25 = new Proxy(f24, v22);
const v27 = Array.prototype;
Object.defineProperty(v27, 1612, { configurable: true, value: v27 });
let v28 = 1;
v28--;
v27.length = v28;
Reflect.construct(v25, v25);
