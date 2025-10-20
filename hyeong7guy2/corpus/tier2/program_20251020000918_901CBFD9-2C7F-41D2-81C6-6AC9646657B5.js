function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12() {
            return a10;
        }
        function f13(a14) {
            for (let v16 = 0; v16 < 5; v16++) {
                const t9 = [0,97,115,109,1,0,0,0,v16,8,2,96,1,536870889,0,96,0,0,2,11,1,3,105,109,112,536870889,102,0,0,3,2,1,1,7,536870889,1,1,109,97,105,110,0,1,536870889,25,1,23,0,253,-1,1,0,0,536870889,2,0,536870889,0,3,0,0,0,4,0];
                delete t9[3];
            }
            return 1;
        }
        Object.defineProperty(this, "e", { get: f12, set: f13 });
    }
    const v74 = new F6();
    v74.e = v74;
}
new F2(-1, -1);
