function poc(i) {
    eval(`(function() { [0].at(i) })()`);
}

for (let i = 0; i < 25000; i++) {
    poc(0);
}