try {
    Uint8Array.fromBase64("symbol", { lastChunkHandling: -9223372036854775807 });
} catch(e5) {
    e5.name;
}
