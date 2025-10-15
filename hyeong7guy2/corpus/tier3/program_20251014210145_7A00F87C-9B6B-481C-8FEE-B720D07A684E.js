function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    try { new v3(); } catch (e) {}
    for (let v6 = 0; v6 < 5; v6++) {
        v6++;
        switch (Array) {
            case v6:
                break;
        }
    }
}
new F0();
