const v22 = {
    construct(a1, a2) {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                const v14 = this.constructor;
                try { new v14(a2, v14, a13, v14); } catch (e) {}
                const v17 = Array.prototype;
                v17.concat.call(v17);
            }
            new F8(a1, Reflect, a7, a6);
        }
        new F4(Reflect, a1);
        return Reflect;
    },
};
function f24() {
    return v22;
}
const v25 = new Proxy(f24, v22);
Reflect.construct(v25, v22);
