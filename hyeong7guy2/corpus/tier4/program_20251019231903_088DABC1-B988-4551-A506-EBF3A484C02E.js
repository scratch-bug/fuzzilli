const v0 = class {
}
function f4() {
    return 6;
}
class C6 {
    static {
        let v7 = this;
        function f8(a9, a10, a11) {
            function f13(a14) {
                return f8;
            }
            this.onmessage = f13;
            for (let v15 = 0; v15 < 5; v15++) {
                Object.defineProperty(a10, this, { set: f13 });
                const v17 = [Reflect];
                function f19() {
                    return f19();
                }
                const v21 = class extends f19 {
                }
                function f22(a23) {
                    return a23.__defineGetter__(v0, f22);
                }
                Object.prototype;
                a9.__proto__ = Symbol;
                async function* f26(a27, a28, a29) {
                    await v15;
                }
                try { f26(f13, 6, Array); } catch (e) {}
                Reflect.construct(f13, v17, f4);
            }
            [f8,v7,f4] = a10;
            512n & -65535;
            return f13;
        }
        new Worker(f8, { type: "function" });
    }
}
