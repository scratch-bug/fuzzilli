function f0(a1, a2, a3) {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let v6 = 0; v6 < 5; v6++) {
        %PretenureAllocationSite({ p1: F4 });
    }
    return a1;
}
const v11 = new Worker(f0, { type: "function" });
v11.getMessage();
