const v1 = [12,-1,-40012];
function f2() {
    return -4294967296;
}
const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        let v6 = 10;
        const v12 = {
            next() {
                v6--;
                const v10 = v6 == 0;
                return { done: v10, value: v6 };
            },
        };
        return v12;
    },
};
const v14 = [v1,v1,f2];
const v17 = [0.8430831335861024,-2.220446049250313e-16];
const v18 = [-1000000.0,3.1489357967701976e+307];
try { v18.filter(null); } catch (e) {}
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    a23.b = a23;
    this.d = a24;
}
const v25 = new F21(v13, v17);
const v27 = ["mT",F21,v25,v18,v14];
v27[4];
const v30 = [];
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    a34 ?? a34;
    function f36() {
        function f37(a38) {
            try { a38.call(1.0); } catch (e) {}
            let v40 = -1098098658;
            function F42(a44, a45) {
                if (!new.target) { throw 'must be called with new'; }
                const v46 = this?.__defineGetter__;
                try { new v46(this, v27); } catch (e) {}
                a44 ?? a44;
            }
            const v49 = new F42();
            v49.constructor.prototype;
            let v52 = 30349n;
            const v54 = -9007199254740990 >> a33;
            v54 - v54;
            v54 / v54;
            ({"b":v52,"e":v40,...Int32Array} = F42);
            try { new ArrayBuffer("mT"); } catch (e) {}
            const v59 = {};
            const v60 = v30.constructor;
            try { new v60(this); } catch (e) {}
            const v62 = v60();
            try { v62.findLast(Symbol); } catch (e) {}
            const v64 = new ArrayBuffer();
            try { v64.slice(v13, v13); } catch (e) {}
            const v66 = v64.slice();
            v66.c = v66;
            Float32Array.name;
            const v69 = new Float32Array();
            try { v69.join(ArrayBuffer); } catch (e) {}
            const v71 = v69.slice();
            try { v71.indexOf(F31, -9007199254740990); } catch (e) {}
        }
        f37(F31);
        f37();
        %OptimizeMaglevOnNextCall(f37);
        return f37;
    }
    Object.defineProperty(this, "toString", { get: f36 });
}
const v75 = new F31();
const v76 = v75?.constructor;
try { new v76(-4294967296, 1.0); } catch (e) {}
class C78 {
    static [v75](a80, a81, a82) {
    }
}
C78.length;
