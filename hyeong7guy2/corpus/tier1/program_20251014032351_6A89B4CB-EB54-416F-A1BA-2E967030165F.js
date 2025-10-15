const v11 = {
    construct(a1, a2) {
        class C4 extends Uint8Array {
        }
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = [0.39346707945810944,-991803.8963643727];
            v9[15] = -12;
            v9[15] |= 256;
        }
        new F5();
        return a1;
    },
};
function f13() {
}
const v14 = new Proxy(f13, v11);
for (let v15 = 0; v15 < 250; v15++) {
    Reflect.construct(v14, []);
}
