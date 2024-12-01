import { env } from "bun";

export async function getInput(day: string): Promise<string> {
    // try to get input from file
    try {
        const input = await Bun.file(`./inputs/${day}.txt`).text();
        if (input) {
            console.log(`Input read from inputs/${day}.txt`);
            return input.slice(0, -1);
        }
    } catch (error) {}

    // try to get input from website
    const cookie = env.COOKIE;

    if (!cookie) {
        console.log(
            `Please either set the COOKIE environment variable in your .env file or download the input file and save it in the inputs/${day}.txt file.`
        );
        process.exit(1);
    }

    const URL = `https://adventofcode.com/2024/day/${day}/input`;
    const res = await Bun.fetch(URL, {
        method: "GET",
        headers: {
            Cookie: `session=${cookie}`,
        },
    });

    if (!res.ok) {
        console.log(
            "Failed to fetch input from website, check your COOKIE environment variable."
        );
        process.exit(1);
    }

    const input = await res.text();

    const file = Bun.file(`./inputs/${day}.txt`);
    await Bun.write(file, input);

    console.log(`Input fetched from website and saved to inputs/${day}.txt`);

    return input;
}
