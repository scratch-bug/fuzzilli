function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 {
        [Uint32Array] = 2134;
    }
    const v8 = new C7();
    const v11 = JSON.stringify({ imp: v8 });
    const v12 = JSON.parse;
    v12.apply(JSON, [v11]);
}
new F0(F0, F0, F0);
new F0();
