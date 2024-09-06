class Project {
    //Types: Latest, Horror, GameJams, Personal, Work, Repo, Buggy
    constructor(name, ProjectType, tooltipText, image) {
        this.name = name;
        this.ProjectType = ProjectType;
        this.tooltipText = tooltipText;
        this.image = image;
    }
}
let tooltipIndex = 0;
function RefreshTooltipTemplates() {
    TooltipDiv = `<div class="tooltip" onmouseover="CheckTooltip('t${tooltipIndex}')">`;
    RightTooltipTextSpan = `<span class="right_tooltiptext" id="t${tooltipIndex}">`;
}
let PROJECTS = [];
let gamesContainerDiv = '<center><div class="gamesContainer">';
let EndDiv = '</div>';
let EndSpan = '</span>';
let TooltipDiv = `<div class="tooltip" onmouseover="CheckTooltip('t${tooltipIndex}')">`;
let RightTooltipTextSpan = `<span class="right_tooltiptext" id="t${tooltipIndex}">`;
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
        const baseUrl = location.hostname === "localhost" ? './content/GamePreviews/' : '/JimmsPortfolio/content/GamePreviews/';

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
async function addProject(_name, _projectType, _txtName, _Image) {
    try {
        // Call the asynchronous readTxt function to get the description
        const description = await readTxt(_txtName);

        // Create the Project instance with the retrieved description
        const projectInstance = new Project(_name, _projectType, description, _Image);

        // Push the Project instance into the PROJECTS array
        PROJECTS.push(projectInstance);

    } catch (error) {
        console.error(error.message);
    }
}
async function Setup() {
    try {
        //Latest Project
        await addProject("Typeytext", "Latest", "17. Typeytext", "Game_Preview - 17. Typeytext.png");
        

        //Horror
        await addProject("Downfall", "Horror", "08. Downfall", "Game_Preview - 08. Downfall.png");
        await addProject("SNAB Classic", "Horror", "10. Boomclub", "Game_Preview - 10. Boomclub.png");
        await addProject("SNAB", "Horror", "15. SNAB Remastered", "Game_Preview - 15. SNAB Remastered.png");

        //Game Jams, Competitions
        await addProject("Slimslime", "GameJams", "01. Slimslime", "Game_Preview - 01. Slimslime.png");
        await addProject("Unconventional Combat", "GameJams", "03. Unconventional Combat", "Game_Preview - 03. Unconventional Combat.png");
        await addProject("Boat Duty", "GameJams", "05. Boat Duty", "Game_Preview - 05. Boat Duty.png");
        await addProject("Roll of Luck", "GameJams", "07. Roll of Luck", "Game_Preview - 07. Roll of Luck.png");
        await addProject("Quac's Breadfull Delivery", "GameJams", "11. Quac", "Game_Preview - 11. Quac.png");
        await addProject("Neverend Lands", "GameJams", "14. Neverend Lands", "Game_Preview - 14. Neverend Lands.png");

        //Personal Projects
        await addProject("Pillow Battle", "Personal", "09. Pillow Battle", "Game_Preview - 09. Pillow Battle.png");
        await addProject("Minigolf Dungeon", "Personal", "06. Minigolf Dungeon", "Game_Preview - 06. Minigolf Dungeon.png");
        await addProject("School Timetable", "Personal", "12. Timetable", "Game_Preview - 12. Timetable.png");
        await addProject("8-Bit Blackjack", "Personal", "13. Blackjack", "Game_Preview - 13. Blackjack.png");
        await addProject("V-Cam", "Personal", "16. V-Cam", "Game_Preview - 16. V-Cam.png");
        //Work Experience
        await addProject("Subscription UI Editor", "Work", "Work - 01. Sub UI Editor", "Work_Preview - 01. Sub UI Editor.png");

        //Github Repos
        await addProject("My Localization System (for Unity)", "Repo", "Repo - 01. Localization", "Repo_Preview - 01. Localization.png");
        await addProject("My Achievement System (for Unity)", "Repo", "Repo - 02. Achievements", "Repo_Preview - 02. Achievements.png");

        //Websites
        await addProject("The Portfolio", "Web", "Web - 01. The Portfolio", "Web_Preview - 01. The Portfolio.png");

        //Buggy Messes
        await addProject("Sawing Connection", "Buggy", "02. Sawing Connection", "Game_Preview - 02. Sawing Connection.png");
        await addProject("Framecam", "Buggy", "04. Framecam", "Game_Preview - 04. Framecam.png");

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

            FullString += TooltipDiv
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br><h2>My "horror" games:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Horror") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            FullString += TooltipDiv
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br><h2>Game Jams, Competitions:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "GameJams") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            FullString += TooltipDiv

            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br><h2>Personal Projects:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Personal") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            FullString += TooltipDiv
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br><h2>Work Experience:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Work") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            FullString += TooltipDiv
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br><h2>GitHub Repositories:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Repo") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            FullString += TooltipDiv
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br><h2>Websites:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Web") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            FullString += TooltipDiv
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br><h2>Buggy Messes:</h2>${gamesContainerDiv}`;
    for (let i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].ProjectType == "Buggy") {
            // Log the tooltipText of the first project in the array
            //console.log(PROJECTS[i].tooltipText);
            FullString += TooltipDiv
            FullString += `<img src="content/GamePreviews/${PROJECTS[i].image}" />`;


            FullString += RightTooltipTextSpan


            FullString += PROJECTS[i].tooltipText;
            FullString += EndSpan;
            FullString += EndDiv;

            tooltipIndex++;
            RefreshTooltipTemplates();
        }
    }
    FullString += `${EndDiv}</center><br>`;
    games.innerHTML = "";
    games.innerHTML += FullString;
}

Setup();



function CheckTooltip(tooltipID) {
    var el = document.getElementById(tooltipID);
    if (isOffscreen(el) == true) {
        //console.log("Offscreen!");
        //console.log(el.className);
        if (el.className == "right_tooltiptext") {
            el.className = "left_tooltiptext";
        }
    }
    else if (el.className == "left_tooltiptext") {
        el.className = "right_tooltiptext";
        if (isOffscreen(el) == true) {
            //console.log("Offscreen!");
            //console.log(el.className);
            if (el.className == "right_tooltiptext") {
                el.className = "left_tooltiptext";
            }
        }
    }
}




function isOffscreen(el) {
    var rect = el.getBoundingClientRect();
    //console.log(rect.x + rect.width);
    //console.log(window.innerWidth);
    return (
        (rect.x + rect.width) > window.innerWidth
    );
};