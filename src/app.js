const figlet = require("figlet");
const inquirer = require("inquirer");
const {addNote, listNotes, removeNote} = require ("../utils/notes");
const chalk = require ("chalk");


const topLevelQuestion = [
    {type: "list",
    name: "options",
    message: "what would you like to do?",
    choices: ["add", "list", "remove", "exit"]}
];

const addQuestion = [
    {type: "input", name: "add", message: "what would you like to add?"}
]

const removeQuestion = [
    {type: "input", name: "remove", message: "what would you like to remove? Please type a number."}
]

const main = () => {
console.log(chalk.blue(figlet.textSync("notes app")));
console.log("Start of my app");
app()
};


const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion);
    if(answers.options == "add") {
        console.log("adding a note...");
        const answer = await inquirer.prompt(addQuestion)
        addNote(answer.add)
        app()
    }else if(answers.options == "list") {
        console.log("listing notes");
        listNotes();
        app()
    }else if(answers.options == "remove") {
        console.log(chalk.red("removing notes"))
        const answer = await inquirer.prompt(removeQuestion)
        removeNote(answer.remove)
        app()
    }else if(answers.options == "exit") {
        console.log("exiting... bye for now!")
    }
};

main();