const v6 = new Int8Array(3657);
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a10;
    this.d = v6;
    this.f = "a";
}
const v13 = new F8("a");
function f15(a16, a17) {
    function f19(a20) {
        let [v21,v22] = a20;
        return a20;
    }
    this.onmessage = f19;
    const v27 = {
        maximumFractionDigits: 4,
        maximumSignificantDigits: 3657,
        minimumFractionDigits: 4,
        minimumIntegerDigits: 4,
        minimumSignificantDigits: 3657,
        roundingIncrement: 4,
        roundingMode: "halfCeil",
    };
    return v27;
}
const v30 = [v13];
new Worker(f15, { arguments: v30, type: "function" });
/a||bc/imugsyd;
