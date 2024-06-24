// top heading selector
const innerHeading = document.getElementById("inner1-heading");
const inner2Heading = document.getElementById("inner2-heading");
const inner2Para = document.getElementById("inner2-para");

// assets1 heading selectors
const box1Heading = document.getElementById("box-upper-heading")
const decription1 = document.getElementById("description_1")
const video = document.getElementById("iframe")

// asset 2
const box2Heading = document.getElementById("box-upper-heading2")
const decription2 = document.getElementById("description_2")

// asset 3
const box3Heading = document.getElementById("box-upper-heading3")
const decription3 = document.getElementById("description_3")

// asset 4
const box4Heading = document.getElementById("box-upper-heading4")
const decription4 = document.getElementById("description_4")

const leftBoardContainer = document.querySelector(".left-board-container")
const btn3 = document.getElementById("btn3");

// left board container selector
const mainleftBoardHeading = document.getElementById("left-board-heading")
const leftBoardSubheading1 = document.getElementById("left-board-subheading1")
const leftBoardSubheading2 = document.getElementById("left-board-subheading2")
const leftBoardSubheading3 = document.getElementById("left-board-subheading3")
const leftBoardSubheading4 = document.getElementById("left-board-subheading4")

const gettingData = async () => {
    fetch(`https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json`)
        .then((res) => res.json())
        .then((data) => displayUI(data))
}

// main function for parsing the data into functionn
const displayUI = (data) => {
    parsingDataIntoVariableBox1(data);
    parsingDataIntoVariableBox2(data);
    parsingDataIntoVariableBox3(data);
    parsingDataIntoVariableBox4(data);
}

// this is for box 1
const parsingDataIntoVariableBox1 = (data) => {
    const { title } = data
    const { task_title, task_description } = data?.tasks[0]
    const { asset_title, asset_description, asset_content } = data?.tasks[0].assets[0]
    innerHeading.textContent = title
    inner2Heading.textContent = task_title
    inner2Para.textContent = task_description
    box1Heading.textContent = asset_title
    decription1.innerHTML = `<span>Description : </span> ${asset_description}`
    video.src = `${asset_content}`
    leftBoardSubheading1.textContent = asset_title
    mainleftBoardHeading.textContent = task_title
}

// this is for box 2
const parsingDataIntoVariableBox2 = (data) => {
    const { asset_title, asset_description, asset_content } = data?.tasks[0].assets[1]
    box2Heading.textContent = asset_title
    decription2.innerHTML = `<span>Description : </span> ${asset_description}`
    leftBoardSubheading2.textContent = asset_title
}

// this is for box 3
const parsingDataIntoVariableBox3 = (data) => {
    const { asset_title, asset_description, asset_content } = data?.tasks[0].assets[2]
    box3Heading.textContent = asset_title
    decription3.innerHTML = `<span>Description : </span> ${asset_description}`
    leftBoardSubheading3.textContent = asset_title
}

// this is for box 4
const parsingDataIntoVariableBox4 = (data) => {
    const { asset_title, asset_description, asset_content } = data?.tasks[0].assets[3]
    box4Heading.textContent = asset_title
    decription4.innerHTML = `<span>Description : </span> ${asset_description}`
    leftBoardSubheading4.textContent = asset_title
}

// tooggling the left navbar
const changeWidthBox = () => {
    if (leftBoardContainer.style.left == "-25rem" && btn3.classList.contains("fa-arrow-right")) {
        leftBoardContainer.style.left = "0rem"
        btn3.classList.add("fa-arrow-left")

    }
    else {
        leftBoardContainer.style.left = "-25rem"
        btn3.classList.remove("fa-arrow-left")
    }
}

btn3.addEventListener("click", changeWidthBox);
gettingData();