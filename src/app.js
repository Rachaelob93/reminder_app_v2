const figlet = require("figlet");
const inquirer = require("inquirer");
const {addNote} = require ("../utils/notes")

const topLevelQuestion = [
    {type: "list",
    name: "options",
    message: "what would you like to do?",
    choices: ["add", "list", "remove", "exit"]}
];

const addQuestion = [
    {type: "input", name: "add", message: "what would you like to add?"}
]


const main = () => {
console.log(figlet.textSync("notes app"));
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
        app()
    }else if(answers.options == "remove") {
        console.log("removing notes")
        app()
    }else if(answers.options == "exit") {
        console.log("exiting... bye for now!")
    }
};

main();