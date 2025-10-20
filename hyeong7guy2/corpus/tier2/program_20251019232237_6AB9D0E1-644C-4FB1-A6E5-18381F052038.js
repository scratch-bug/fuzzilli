function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [this,this];
        const v11 = JSON.stringify({ b: v8 });
        const v12 = JSON.parse;
        v12.apply(JSON, [v11]);
        return a7;
    }
    f4(F0, a2, F0);
}
const v16 = new F0(F0, F0);
const v17 = v16.constructor;
new v17(v17, v17, v17);
