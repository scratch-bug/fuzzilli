function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -2147483649;
    function f3() {
        let v4 = -1098098658;
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            a10++;
        }
        new F7();
        let v13 = 30349n;
        ({"b":v13,"e":v4,...Int32Array} = "2147483647");
        return v4;
    }
}
const v14 = new F0();
const v15 = [5,1111125545,-9007199254740990];
const v16 = [v15,v15,F0,v14];
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
try { F17.constructor(v16); } catch (e) {}
