let v0 = [Infinity,-829.9858486304903,82143.6462470959,1000000000000.0,29.076078961028543,-421.10880585553434,-3.0,-805449.139880439,1000.0];
const v3 = new Float32Array(109);
const v5 = Symbol.iterator;
Symbol.for(v5.description);
const v17 = {
    [v5]() {
        let v10 = 10;
        const v16 = {
            next() {
                v10--;
                const v14 = v10 == 0;
                return { done: v14, value: v10 };
            },
        };
        return v16;
    },
};
class C19 {
    set h(a21) {
        v0 = a21;
    }
    n(a23, a24, a25) {
        for (let i27 = 0; i27 < 1; i27++) {
        }
        return a24;
    }
    set b(a34) {
    }
}
const v35 = new C19();
const v36 = v35?.constructor;
try { new v36(); } catch (e) {}
const v38 = new C19();
v38.c = v38;
function F39(a41, a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    const v44 = a41?.c;
    try { new v44(); } catch (e) {}
    this.b = a42;
}
const v46 = new F39(v38, C19, v0);
v46.e = v46;
const v47 = new F39(F39, v17, v3);
v47.length;
new F39(v47, C19, v38);
new F39(v35, v0, v17);
function F51(a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(v0, a53); } catch (e) {}
}
