try {
    class C0 {
    }
    for (let i2 = 0; i2 < 100000; i2++) {
        %PretenureAllocationSite({ p2: C0 });
    }
} catch(e9) {
}
