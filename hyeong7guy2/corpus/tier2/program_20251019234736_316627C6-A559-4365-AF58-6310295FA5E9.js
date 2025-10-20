function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [v2];
const v5 = { type: "🙌🏿", arguments: v3 };
const t6 = JSON.stringify;
t6(v5);
