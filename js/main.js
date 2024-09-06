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

if (MobileOrTablet()) window.location.replace(`/JimmsPortfolio/mobile.html`);

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
function MobileOrTablet(){
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};