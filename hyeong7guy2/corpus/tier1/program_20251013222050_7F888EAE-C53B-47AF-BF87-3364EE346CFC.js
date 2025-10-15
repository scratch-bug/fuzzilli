const v9 = {
    construct(a1, a2) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            this.f = -256;
            function f6() {
                return f6;
            }
        }
        new F3();
        return Reflect;
    },
};
function f11() {
}
const v12 = new Proxy(f11, v9);
for (let v13 = 0; v13 < 250; v13++) {
    Reflect.construct(v12, []);
}
