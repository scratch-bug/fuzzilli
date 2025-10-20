function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    return "🙌🏿";
}
const v7 = new Float32Array(255);
const v10 = JSON.stringify({ [F0]: v7 });
const v11 = JSON.parse;
v11.apply(JSON, [v10]);
