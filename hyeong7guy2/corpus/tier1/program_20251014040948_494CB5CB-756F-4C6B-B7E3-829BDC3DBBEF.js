const v0 = /3ODm[x]*/imugyd;
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
}
const v4 = new F1();
function f5(a6) {
    async function* f7(a8, a9, a10, a11) {
        let v12 = 0;
        let v14 = undefined;
        v14 = f7;
        v12++;
        class C16 {
        }
        let v17 = 1;
        for (let v18 = 0; v18 < 5; v18++) {
            const v20 = {
                next() {
                },
            };
            v17 = v17;
        }
        yield* a6;
        return a9;
    }
}
const v23 = [v4];
new Worker(f5, { arguments: v23, type: "function" });
for (let i27 = 0; i27 < 20000; ++i27) {
}
