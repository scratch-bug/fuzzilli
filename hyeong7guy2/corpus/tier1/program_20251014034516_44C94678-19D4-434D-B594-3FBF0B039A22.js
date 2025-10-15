const v1 = [[9.496961080341183,0.6498586506055117,-1e-15,0.08231306424486928,-2.0,-2.0,1.7976931348623157e+308]];
function f2(a3) {
    function f4() {
        return arguments;
    }
    f4();
    return v1;
}
const v9 = [v1];
new Worker(f2, { arguments: v9, type: "function" });
