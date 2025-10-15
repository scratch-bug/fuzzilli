new Date();
const v2 = class extends Date {
    valueOf(a4, a5) {
        this.e *= a5;
        return this;
    }
    d;
}
const v6 = new v2();
const v7 = new v2();
new v2();
function f9(a10) {
    return a10;
}
const v11 = class extends f9 {
    static {
    }
}
new v2();
const v16 = new Int32Array(4010);
new BigInt64Array(7);
function f20(a21, a22) {
    if (a22) {
        const v23 = [];
        %VerifyType(v23);
        function* f25(a26, a27, a28) {
            yield v16;
            return a26;
        }
        try { f25(a21, v6, v7); } catch (e) {}
        a21.concat(v23, a21, v23, v23);
    }
    a21?.[0] | 0;
}
const v36 = [100];
function f37() {
    v36[0] = 2.2;
    return Array;
}
const v41 = Symbol.species;
const v42 = { [v41]: f37 };
try { v36.constructor = v42; } catch (e) {}
for (let i44 = 0; i44 < 25000; i44++) {
    v36[0] = 100;
}
const v56 = {
    [BigInt64Array](a52, a53, a54, a55) {
        return a54;
    },
};
