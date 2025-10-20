function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f2() {
        ("🙌🏿").fontsize().split(("🙌🏿").charAt());
    }
    ({ construct: f2 }).construct();
}
new F0();
