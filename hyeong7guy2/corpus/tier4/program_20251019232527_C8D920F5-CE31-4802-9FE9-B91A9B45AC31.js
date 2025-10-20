function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
JSON.stringify(F0, ["n"]);
