function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2147483649;
}
new F0();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12(a13, a14, a15) {
            function F16(a18, a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                const v26 = {
                    construct(a24, a25) {
                        Date.__proto__ = a25;
                        return a25;
                    },
                };
                function f28() {
                }
                const v29 = new Proxy(f28, v26);
                new v29();
            }
            new F16(this, a15, a14, a15);
            return this;
        }
        f12();
    }
    new F8();
}
new F4();
new F4();
for (let i44 = (() => {
        new Uint8Array(37828618);
        function f40() {
            return f40;
        }
        WebAssembly.instantiateStreaming().catch(f40);
        return 0;
    })();
    i44 < 25000;
    ++i44) {
}
new F4();
class C51 extends F0 {
}
new C51();
for (let i55 = 0, i56 = 10; i56; i56--) {
}
