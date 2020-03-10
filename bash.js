// //Otuput a prompt
// process.stdout.write("propmpt > ");

// //The stdin 'data' event fires after a user types in a line
// process.stdin.on("data", data => {
//   const cmd = data.toString().trim(); //remove the newline

//   process.stdout.write("You typed: " + cmd);
//   process.stdout.write("\npropmt > ");
// });

const prompt = data => {
  console.log(data);
  process.stdout.write("> ");
};

const main = data => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(" ");
  switch (command) {
    case "pwd":
      require("./pwd")(prompt);
      break;
    case "ls":
      require("./ls")(prompt);
      break;
    case "cat":
      require("./cat")(arg, prompt);
      break;
    case "curl":
      require("./curl")(arg, prompt);
      break;
    default:
      prompt("not found");
  }
};

prompt("Welcome to Node Shell");
process.stdin.on("data", main);
