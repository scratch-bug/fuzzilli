const arr = [1337];
const handler = {};
function f6() {
}
const v7 = new Proxy(f6, handler);
function vuln() {
    const v9 = new v7();
    if (v9) {
        return arr[0] + 1;
    }
}
for (let i14 = 0; i14 < 25000; i14++) {
    vuln();
}
vuln();
