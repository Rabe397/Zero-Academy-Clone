//courses-section
const toolsContainer = document.querySelector(".tools-container");

let toolsData = [
    {
        id : 1,
        title : "Code Editor",
        img: "../../images/developer tools/code-editors.png" ,
        items: 0,
    },
    {
        id : 2,
        title : "Command Line",
        img: "../../images/developer tools/command-line-tools.png" ,
        items: 7,
    },
    {
        id : 3,
        title : "Css",
        img: "../../images/developer tools/css-tools.png" ,
        items: 10,
    },
    {
        id : 4,
        title : "Educational Games",
        img: "../../images/developer tools/educational-games.png" ,
        items: 7,
    },
    {
        id : 5,
        title : "Generators",
        img: "../../images/developer tools/generators.png" ,
        items: 14,
    },
    {
        id : 6,
        title : "Package Managers",
        img: "../../images/developer tools/package-managers.png" ,
        items: 0,
    },
    {
        id : 7,
        title : "Performance",
        img: "../../images/developer tools/performance.png" ,
        items: 11,
    },
    {
        id : 8,
        title : "Security Tools",
        img: "../../images/developer tools/security-tools.png" ,
        items: 0,
    },
    {
        id : 9,
        title : "Seo Tools",
        img: "../../images/developer tools/seo-tools.png" ,
        items: 0,
    },
    {
        id : 9,
        title : "Task Runners",
        img: "../../images/developer tools/task-runners.png" ,
        items: 8,
    },
    {
        id : 10,
        title : "Ui/Ux",
        img: "../../images/developer tools/ui-ux-tools.png" ,
        items: 7,
    },
]


toolsData.map((tool)=>{
    toolsContainer.innerHTML += `
        <div class="tools-box">
            <div class="img-container">
              <img src="${tool.img}" alt="${tool.title}">
            </div>
            <div>
              <a href=""> ${tool.title} </a> 
            </div>
            <hr>
            <span> <bdi>${tool.items} Items  </bdi> </span>
        </div>
    `
})