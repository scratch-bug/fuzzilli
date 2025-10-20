function F1() {
    if (!new.target) { throw 'must be called with new'; }
    JSON.rawJSON(false);
}
new F1();
