const v1 = [14,-65536,777761031,39120,128];
const v5 = new Uint8ClampedArray(10);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = "isExtensible";
    this.c = a8;
    this.f = a11;
}
new F6(v5, 1360539165, 1360539165, F6);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a16;
}
const v18 = new F13(F6, v1, 10);
new F13(1360539165, v18, 10);
new Uint8ClampedArray();
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    function f27() {
        function f28(a29) {
            new BigUint64Array(1073741825);
            const v48 = { 3: f27 };
            const v53 = new SharedArrayBuffer(9, { maxByteLength: 512 });
            new BigInt64Array(v53);
            for (let v69 = 0; v69 < 50; v69++) {
                v69++;
            }
            const v79 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
            const t28 = WebAssembly.Module;
            const v82 = new t28(v79);
            function f83() {
            }
            const v88 = {
                set g(a85) {
                    try {
                        super.setInt32(1, 10, this, 1);
                    } catch(e87) {
                    }
                },
                f: f83,
            };
            const v89 = { m: v88 };
            const t42 = WebAssembly.Instance;
            const v91 = new t42(v82, v89);
            const t44 = v91.exports.main;
            t44();
            const t45 = Temporal.PlainTime;
            const v97 = new t45();
            const t48 = Temporal.PlainTime;
            const v99 = new t48();
            v99.constructor.compare(v97, v99);
        }
        f28();
        return f28;
    }
    Object.defineProperty(this, "toString", { get: f27 });
}
const v103 = new F23(F23, F23);
v103.toString();
