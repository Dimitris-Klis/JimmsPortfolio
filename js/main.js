class Project {
    //Types: Latest, Horror, GameJams, Personal, Buggy
    constructor(name, ProjectType, tooltipText, image, left) {
        this.name = name;
        this.ProjectType = ProjectType;
        this.tooltipText = tooltipText;
        this.image = image;
        this.left = left;
    }
}
let PROJECTS = [];
let gamesContainerDiv = '<center><div class="gamesContainer">';
let EndDiv = '</div>';
let EndSpan = '</span>';
let RightTooltipDiv = '<div class="right_tooltip">'
let RightTooltipTextSpan = '<span class="right_tooltiptext">'
let LeftTooltipDiv = '<div class="left_tooltip">'
let LeftTooltipTextSpan = '<span class="left_tooltiptext">'
var games = document.getElementById("myGames");
let txtShortcut = "Tooltip_Text - ";
var CurrentDescription = "";
games.innerHTML = `
        <br>
        <h1 class="commentdeco">Games &amp; Projects</h1>
        <h2>Hold on, they're loading!</h2>`;

async function readTxt(name) {
    try {
        // Use a relative path from the root (JimmsPortfolio-main)
        const baseUrl = '/JimmsPortfolio/content/GamePreviews/';

        const response = await fetch(`${baseUrl}${txtShortcut}${name}.txt`);

        if (!response.ok) {
            throw new Error(`Failed to load ${name}.txt`);
        }

        return response.text();
    } catch (error) {
        console.error(error.message);
        return ''; // Return an empty string or handle the error accordingly
    }
}
async function addProject(_name, _projectType, _txtName, _Image, _Left) {
    try {
        // Call the asynchronous readTxt function to get the description
        const description = await readTxt(_txtName);

        // Create the Project instance with the retrieved description
        const projectInstance = new Project(_name, _projectType, description, _Image, _Left);

        // Push the Project instance into the PROJECTS array
        PROJECTS.push(projectInstance);

    } catch (error) {
        console.error(error.message);
    }
}
async function Setup() {
    try {
        //Latest Project
        await addProject("SNAB", "Latest", "15. SNAB Remastered", "Game_Preview - 15. SNAB Remastered.png", false);
        

        //Horror
        await addProject("Downfall", "Horror", "8. Downfall", "Game_Preview - 8. Downfall.png", false);
        await addProject("SNAB", "Horror", "10. Boomclub", "Game_Preview - 10. Boomclub.png", false);


        //Game Jams, Competitions
        await addProject("Slimslime", "GameJams", "1. Slimslime", "Game_Preview - 1. Slimslime.png", false);
        await addProject("Unconventional Combat", "GameJams", "3. Unconventional Combat", "Game_Preview - 3. Unconventional Combat.png", false);
        await addProject("Boat Duty", "GameJams", "5. Boat Duty", "Game_Preview - 5. Boat Duty.png", false);
        await addProject("Roll of Luck", "GameJams", "7. Roll of Luck", "Game_Preview - 7. Roll of Luck.png", false);
        await addProject("Quac's Breadfull Delivery", "GameJams", "11. Quac", "Game_Preview - 11. Quac.png", true);
        await addProject("Neverend Lands", "GameJams", "14. Neverend Lands", "Game_Preview - 14. Neverend Lands.png", false);

        //Personal Projects
        await addProject("Pillow Battle", "Personal", "9. Pillow Battle", "Game_Preview - 9. Pillow Battle.png", false);
        await addProject("Minigolf Dungeon", "Personal", "6. Minigolf Dungeon", "Game_Preview - 6. Minigolf Dungeon.png", false);
        await addProject("School Timetable", "Personal", "12. Timetable", "Game_Preview - 12. Timetable.png", false);
        await addProject("8-Bit Blackjack", "Personal", "13. Blackjack", "Game_Preview - 13. Blackjack.png", true);

        //Buggy Messes
        await addProject("Sawing Connection", "Buggy", "2. Sawing Connection", "Game_Preview - 2. Sawing Connection.png", false);
        await addProject("Framecam", "Buggy", "4. Framecam", "Game_Preview - 4. Framecam.png", false);

        // Perform the next action
        FinishSetup();
    }
    catch (error) {
        console.error(error.message);
    }
}
function FinishSetup() {
    let FullString =
        `
        <br>
        <h1 class="commentdeco">Games &amp; Projects</h1>
        <h2>My latest project:</h2>
    `
    FullString += gamesContainerDiv;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Latest") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipDiv
            }
            else {
                FullString += RightTooltipDiv
            }
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipTextSpan
            }
            else {
                FullString += RightTooltipTextSpan
            }
            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;
        }
    }
    FullString += `${EndDiv}</center><br><h2>My "horror" games:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Horror") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipDiv
            }
            else {
                FullString += RightTooltipDiv
            }
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipTextSpan
            }
            else {
                FullString += RightTooltipTextSpan
            }
            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;
        }
    }
    FullString += `${EndDiv}</center><br><h2>Game Jams, Competitions:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "GameJams") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipDiv
            }
            else {
                FullString += RightTooltipDiv
            }
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipTextSpan
            }
            else {
                FullString += RightTooltipTextSpan
            }
            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;
        }
    }
    FullString += `${EndDiv}</center><br><h2>Personal Projects:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Personal") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipDiv
            }
            else {
                FullString += RightTooltipDiv
            }
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipTextSpan
            }
            else {
                FullString += RightTooltipTextSpan
            }
            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;
        }
    }
    FullString += `${EndDiv}</center><br><h2>Buggy Messes:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Buggy") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipDiv
            }
            else {
                FullString += RightTooltipDiv
            }
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;
            if (PROJECTS[i].left == true) {
                FullString += LeftTooltipTextSpan
            }
            else {
                FullString += RightTooltipTextSpan
            }
            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;
        }
    }
    FullString += `${EndDiv}</center><br>`;
    games.innerHTML = "";
    games.innerHTML += FullString;
}
Setup();
