const v3 = class {
    static #valueOf(a5, a6) {
        function* f7(a8, a9) {
            yield a8;
            yield* [a6,this];
            return NaN;
        }
        try { f7(36011, this); } catch (e) {}
        return 36011;
    }
}
v3.prototype = v3;
try { v3(); } catch (e) {}
new v3();
new v3();
new v3();
const v17 = new v3();
const v18 = v17?.constructor;
try { new v18(); } catch (e) {}
const v22 = new Uint32Array(132);
v22[101] = v22;
-146337660n * -146337660n;
-146337660n !== -146337660n;
-146337660n >> -146337660n;
257 + 257;
const v30 = new Float64Array(257);
const v31 = v30.join(v30);
try { v31.bold(); } catch (e) {}
v31[19356];
const v35 = ({ done: v31 })?.__defineSetter__;
try { new v35(Float64Array, v31); } catch (e) {}
268435441 >>> 268435441;
Uint8ClampedArray.length = Uint8ClampedArray;
new Uint8ClampedArray(268435441);
