"use strict";

const poll = {
  question: "What is your favorite programming language",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0),
  registeredNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register
    typeof answer === "number" &&
      answer < this.answer.length &&
      this.answers[answer]++;

    console.log(this.answers);
  },
};
// poll.registeredNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registeredNewAnswer.bind(poll));
