const v1 = [Symbol];
const v2 = [-9007199254740990,3,0,7,3,0,-1,7,12541,-2];
const v3 = class {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            const v19 = this?.__defineGetter__;
            let v20;
            try { v20 = new v19(this, this); } catch (e) {}
            a15 ?? a15;
            a17 ?? a17;
            function f23() {
                return v20;
            }
            function f24(a25) {
                const v28 = Temporal.PlainDateTime;
                try { v28(a25, a25, a25); } catch (e) {}
                for (let v30 = 0; v30 < 5; v30++) {
                    v30 - v30;
                    let v33 = undefined;
                    const v35 = {
                        get g() {
                            v33 = undefined;
                            return v28;
                        },
                    };
                }
                const v45 = {
                    [1]() {
                    },
                    n(a38, a39, a40) {
                        return a10;
                    },
                    set b(a42) {
                    },
                    [Symbol]() {
                    },
                    next() {
                        return this;
                    },
                };
                async function* f46(a47, a48, a49, a50) {
                    [DataView,v2,v3,f46];
                    return a9;
                }
                f46(1, a7, Temporal, Temporal);
                class C54 {
                    static get d() {
                    }
                }
                return v45;
            }
            f24.prototype = f24;
            Object.defineProperty(this, "e", { get: f23, set: f24 });
            this.e = -1;
        }
        const v56 = new F13(a11, v1);
        v56.e = v56;
        return -1;
    }
    f8(f8, v3, a6);
    %OptimizeFunctionOnNextCall(f8);
}
const v58 = new F4();
new F4(v58, F4);
new F4();
