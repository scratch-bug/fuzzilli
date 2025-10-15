function hot_function(m) {
    try {
        m.p = 123;
    } catch (e) {}
}

import('data:text/javascript,export let p = 1;')
    .then(m => {
        for (let i = 0; i < 20000; i++) {
            hot_function(m);
        }
        hot_function(m);
    });