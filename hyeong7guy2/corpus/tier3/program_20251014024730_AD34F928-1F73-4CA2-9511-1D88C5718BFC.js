for (let i1 = 0;
    i1 < 25000;
    (() => {
        ++i1;
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
        }
    })()) {
    const v10 = [i1,i1,i1,i1];
    v10["lastIndexOf"]();
    v10.length;
}
