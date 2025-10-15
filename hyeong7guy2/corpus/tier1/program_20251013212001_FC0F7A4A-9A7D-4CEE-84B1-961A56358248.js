const v8 = {
    construct(a1, a2) {
        function F3() {
            if (!new.target) { throw 'must be called with new'; }
            this.f = -256;
        }
        new F3();
        return Reflect;
    },
};
function f10() {
    return v8;
}
const v11 = new Proxy(f10, v8);
for (let v12 = 0; v12 < 10; v12++) {
    Reflect.construct(v11, [v8]);
}
