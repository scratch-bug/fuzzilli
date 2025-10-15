let trigger = false;
class C {}
const p = new Proxy(C, {
    construct: () => {
        if (trigger) {
            eval('var y = 2.2;');
        }
        return {};
    }
});

function vuln() {
    let x = 1;
    const closure = () => x;

    new p();

    eval('');

    let z = 3;

    return x + z;
}

for (let i = 0; i < 25000; ++i) {
    vuln();
}

trigger = true;
vuln();