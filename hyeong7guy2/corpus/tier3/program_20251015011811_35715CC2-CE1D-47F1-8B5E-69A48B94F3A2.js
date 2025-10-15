/N(?!(a))\1/imugyd;
class C1 {
    static {
        const v3 = this.e;
        v3 ?? v3;
    }
    static get a() {
        return this;
    }
}
new C1();
const v10 = new Uint8ClampedArray(5);
const v13 = new Int16Array(64);
v13[45];
128 << 128;
try { Uint8ClampedArray.from(5); } catch (e) {}
new Uint8ClampedArray(128);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    a23 ?? a23;
    let v25 = false;
    for (let v26 = 0; v26 < 50; v26++) {
        v26 * v26;
        if (v26) {
            v25 = true;
        }
        function f29() {
            return v25;
        }
        WebAssembly.instantiateStreaming().catch(f29);
    }
}
try { F20.call(128); } catch (e) {}
const v34 = new F20();
const v35 = v34?.constructor;
try { new v35(v10, v34); } catch (e) {}
