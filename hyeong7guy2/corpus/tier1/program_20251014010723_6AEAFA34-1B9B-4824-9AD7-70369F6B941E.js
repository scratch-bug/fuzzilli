function f1() {
    return -14;
}
function f2() {
    return -14;
}
try {
    Object.defineProperty(Object, "65536", Object)[65536];
} catch(e9) {
}
class C10 {
    static #p(a12) {
        let v13 = 0;
        while (268435440 < 8) {
            for (let i17 = 0; i17 < 1; i17++) {
                function F23(a25, a26, a27) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.d = a12;
                    this.g = C10;
                    this.h = f1;
                }
                new F23(v13, 268435440, a12);
                new F23(i17, i17, i17);
            }
            const v30 = v13++;
            C10 *= this;
            {
                super.a = v30;
            }
            Object[Symbol.search];
        }
        return this;
    }
}
const v34 = new C10();
const v35 = new C10();
const v36 = v35?.constructor;
try { new v36(); } catch (e) {}
new C10();
[11,-1110891514,268435439,3692,-2147483647,0,6,1,2147483647];
function f40() {
    return v35;
}
f40.prototype = f40;
function F42(a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.propertyIsEnumerable(a44); } catch (e) {}
    this.e = this;
    this.f = -14;
}
const v47 = new F42(v34, 4096);
const v48 = new F42(v47, 4096);
new F42(v35, -14);
const v50 = new F42(v34, -14);
v50.e = v50;
const v52 = new Uint8ClampedArray(268435440);
try { v52.slice(f2, v48); } catch (e) {}
const v56 = Reflect.getPrototypeOf(Uint32Array);
try { new v56(); } catch (e) {}
let v58;
try { v58 = v56.from(v56); } catch (e) {}
v58 ?? v58;
