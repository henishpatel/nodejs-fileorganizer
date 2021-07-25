function helpFn() {
    console.log(`
    List of All the Commands :
                                1. node main.js tree "directoryPath"
                                2. node main.js organise "directoryPath"
                                3. node main.js help
    `);
}
module.exports = {
    helpKey: helpFn
}