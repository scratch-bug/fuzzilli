const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        let v5 = 10;
        const v11 = {
            next() {
                v5--;
                const v9 = v5 == 0;
                const v10 = { done: v9 };
            },
        };
    },
};
new Map();
[-7118,2];
const v18 = Symbol.iterator;
const v25 = {
    [v18]() {
        const v24 = {
            next() {
                const v22 = v12 == 0;
                const v23 = { done: v22 };
            },
        };
    },
};
const v31 = new Uint8Array(512);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    const v36 = a34?.constructor;
    try { v36(Int32Array, Int32Array); } catch (e) {}
    try { new a34(v31, v31, a35); } catch (e) {}
    this.g = 9;
}
new F32(Uint8Array, 9);
function F40(a42, a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
}
new F40(9, Uint8Array, v31);
const v48 = ("2147483647").normalize("NFKD");
function f50() {
}
function f51() {
    function f52() {
        const v54 = { done: true };
        new Uint8Array(1878388927);
        function f58(a59) {
            function f60() {
                function f61() {
                    function F62(a64) {
                        if (!new.target) { throw 'must be called with new'; }
                        function F65(a67, a68) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        function F69(a71, a72) {
                            if (!new.target) { throw 'must be called with new'; }
                            const v73 = [a71];
                            v73.pop();
                            v73.at(F65);
                            %OptimizeFunctionOnNextCall(F69);
                        }
                        F69(F62, F62);
                    }
                    new F62(F62(F62));
                    f52();
                    return f58;
                }
                const v80 = {};
                v80.ownKeys = f58;
                Proxy(f61, v80);
            }
            const v83 = Symbol.iterator;
            const v84 = { [v83]: f60 };
            for (const v86 of v48) {
                const v87 = {};
            }
            return f58;
        }
        return v54;
    }
    return { next: f52 };
}
const v89 = Symbol.iterator;
f50.bind(null, ...{ [v89]: f51 });
let v93 = 60985n;
v93 **= v93;
function f94() {
}
const v95 = { f: f94 };
const v96 = {};
