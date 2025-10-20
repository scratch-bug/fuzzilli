function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        return "🙌🏿";
    }
    const v8 = new Float32Array();
    const v11 = JSON.stringify({ [F2]: v8 });
    const v12 = JSON.parse;
    v12.apply(JSON, [v11]);
}
new F0();
new F0();
