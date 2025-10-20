const v2 = new Uint8Array(4096);
const v4 = ([4096,v2]).join();
try {
    Uint8Array.fromHex(v4);
} catch(e6) {
}
