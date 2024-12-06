import { argv } from "bun";
import { getInput } from "./getInput";
import { getAnswer as getAnswerDay1 } from "./src/1/1";
import { getAnswer as getAnswerDay2 } from "./src/2/2";
import { getAnswer as getAnswerDay3 } from "./src/3/3";
import { getAnswer as getAnswerDay4 } from "./src/4/4";
import { getAnswer as getAnswerDay5 } from "./src/5/5";
import { printAnswers } from "./utils";
import type { Answer } from "./types";

const day = argv[2];

async function saveOuput(answer: Answer, day: string) {
  const ouput = Bun.file(`./answers/${day}.txt`);
  const answers = `Answer for day ${day}:\n a: ${answer.a.toString()}\n b: ${answer.b.toString()}`;
  await Bun.write(ouput, answers);
  console.log(`Answer for day ${day} saved to answers/${day}.txt`);
}

switch (day) {
  case "1":
    const input = await getInput("1");
    const answers = getAnswerDay1(input);
    printAnswers(answers);
    saveOuput(answers, "1");
    break;
  case "2":
    const input2 = await getInput("2");
    const answers2 = getAnswerDay2(input2);
    printAnswers(answers2);
    saveOuput(answers2, "2");
    break;
  case "3":
    const input3 = await getInput("3");
    const answers3 = getAnswerDay3(input3);
    printAnswers(answers3);
    saveOuput(answers3, "3");
    break;
  case "4":
      const input4 = await getInput("4");
      const answers4 = getAnswerDay4(input4);
      printAnswers(answers4);
      saveOuput(answers4, "4");
      break;
  case "5":
      const input5 = await getInput("5");
      const answers5 = getAnswerDay5(input5);
      printAnswers(answers5);
      saveOuput(answers5, "4");
      break;
  default:
    console.log("Please specify day to run, for example:");
    console.log("bun run app.ts 1");
    break;
}
