const v16 = {
    construct(a1, a2) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            for (let i6 = 0; i6; ++i6) {
            }
            String.prototype.toUpperCase;
        }
        new F3();
        return Reflect;
    },
};
function f18() {
}
const v19 = new Proxy(f18, v16);
for (let v20 = 0; v20 < 250; v20++) {
    Reflect.construct(v19, []);
}
