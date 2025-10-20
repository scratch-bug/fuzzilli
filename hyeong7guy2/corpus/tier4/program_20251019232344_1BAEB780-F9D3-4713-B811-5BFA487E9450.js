function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v11 = 0; v11 < 5; v11++) {
            const v32 = {};
            const v42 = [0,97,115,109,1,0,0,0,v11,8,2,96,1,536870889,0,96,0,0,2,11,1,3,105,109,-815842291,536870889,102,0,0,3,2];
            v42.fill(1).push(v32);
            delete v42[3];
        }
    }
    new F5();
}
new F1();
