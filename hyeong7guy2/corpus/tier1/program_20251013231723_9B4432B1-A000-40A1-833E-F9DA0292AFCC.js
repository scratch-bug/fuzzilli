const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.g = v0;
}
const v3 = new F1();
function f4() {
    return v3;
}
class C5 extends F1 {
    [F1](a7) {
        new f4();
        return a7;
    }
    static e = f4;
    static {
    }
    #g;
    static {
    }
}
const v11 = new C5();
const v12 = new C5();
const v13 = new C5();
Uint8ClampedArray.BYTES_PER_ELEMENT;
new Uint8ClampedArray(1224);
const v18 = [-7];
class C19 {
}
C19.prototype;
C19[1073741825] = v18;
try { new Symbol(); } catch (e) {}
for (let v23 = 0; v23 < 100; v23++) {
    v23 - v23;
    const v25 = %WasmArray();
    const v26 = v25?.[4];
    function f27(a28, a29, a30, a31) {
        a28.g = a28;
        a30.b = a30;
    }
    try { f27(v12, v11, v13, v12); } catch (e) {}
    C19[1073741825];
    try {
        f4();
    } catch(e35) {
    }
    const v36 = async (a37, a38, a39) => {
        await v26;
    };
    v23 | v23;
    const v43 = {
        [Symbol]() {
            v23 = this;
        },
    };
}
