function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = 13;
            v7--;
            const v10 = new SharedArrayBuffer(v7);
            const v12 = new Uint8Array(v10);
            v12.sort(a3);
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0();
for (let i17 = 0, i18 = 10; i18; i18--) {
}
for (let i26 = 0, i27 = 10;
    i27;
    (() => {
        const v30 = class {
            static [v14](a32, a33, a34) {
            }
            #n(a36, a37) {
            }
            static get f() {
            }
        }
        --i27;
    })()) {
}
