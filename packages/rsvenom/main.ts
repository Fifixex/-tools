/**
 * @todo Work in progress
 */
async function main() {
    const proc = Fabela.spawn(["fabela", "--version"]);
    console.log(await proc.exited); // 0
}
