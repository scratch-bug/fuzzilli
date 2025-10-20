const v1 = {};
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i5 = 512;
        (() => {
            let v6 = 20000;
            v6++;
            const v8 = i5 !== v6;
            i5 == v8;
            return v8;
        })();
        ++i5) {
    }
}
new F2();
