function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    for (let i7 = 51680;
        (() => {
            let v8 = 1;
            v8--;
            return v8;
        })();
        ) {
    }
}
new F0();
