# advent2024

To install dependencies:

```bash
bun install
```

## To configure input: 

you can either set your cookie to let the app fetch the input from the website or you can manually download the input and save it in the `input.txt` file in the days folder. Any fetched input will also be saved in the `inputs` folder.

1. To set your cookie, set the `COOKIE` environment variable in your `.env` file.

2. To set the input manually, download the input file from the website and save it in the `input.txt` file in the days folder.


## To run start the app and pass a specific day as first argument:

```bash
bun run app.ts 1
```

## The answers will be saved in the `answers` folder.

```bash
ls answers
```

This project was created using `bun init` in bun v1.1.36. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.