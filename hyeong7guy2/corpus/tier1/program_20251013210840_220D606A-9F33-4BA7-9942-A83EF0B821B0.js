let trigger = false;
class C2 {
}
const v4 = () => {
    if (trigger) {
        eval("var y = 2.2;");
    }
    return {};
};
const v10 = new Proxy(C2, { construct: v4 });
const p = v10;
function vuln() {
    let x = 1;
    const v15 = () => {
        return x;
    };
    const closure = v15;
    new p();
    eval("");
    let z = 3;
    return x + z;
}
for (let i25 = 0; i25 < 25000; ++i25) {
    vuln();
}
trigger = true;
vuln();
