const v0 = /3ODm[x]*/imugyd;
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a4;
    this.c = v0;
}
const v5 = new F2(-168.06558789272424);
let v6 = null;
function f8(a9) {
    async function* f10(a11, a12, a13, a14) {
        let v15 = 0;
        ({"ignoreCase":v6,...a13} = v0);
        function* f16(a17, a18, a19) {
            yield a19;
            return f10;
        }
        f16(a13, f16, a14);
        v15++;
        v15 < 0;
        await 12324n;
        yield* a9;
        return a12;
    }
    f10();
    return f10;
}
const v29 = [v5];
new Worker(f8, { arguments: v29, type: "function" });
