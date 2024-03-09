//courses-section
const coursesContainer = document.querySelector(".courses-container");

let coursesData = [
    {
        id : 1,
        title : "HTML",
        year : "Created in 2021",
        img: "../../images/learning-courses/html-course.svg" ,
        Topic : "9 Topics",
        assignment: "33 Assignments",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 2,
        title : "Css",
        year : "Created in 2021",
        img: "../../images/learning-courses/css-course.svg" ,
        Topic : "20 Topics",
        assignment: "76 Assignments",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 3,
        title : "JavaScript Bootcamp",
        year : "Created in 2021",
        img: "../../images/learning-courses/javascript-bootcamp.svg" ,
        Topic : "26 Topics",
        assignment: "120 Assignments",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    
    {
        id : 4,
        title : "SASS",
        year : "Created in 2021",
        img: "../../images/learning-courses/sass-course.svg" ,
        Topic : "4 Topics",
        assignment: "24 Assignments",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 5,
        title : "Typescript",
        year : "Created in 2022",
        img: "../../images/learning-courses/typescript.svg" ,
        Topic : "4 Topics",
        assignment: "26 Assignments",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    }
]

coursesData.map((course)=>{
    coursesContainer.innerHTML += `
        <div class="courses-box">
           <div class="upper flex-full">
              <div class="upper-first">
                <a href=""> ${course.title} </a>
                <p> ${course.year} </p>
              </div>
              <div class="img-container">
                <img src="${course.img}" alt="${course.title}">
              </div>
            </div>
            <hr>
            <div class="mid">
              <div>
                <i class="far fa-play-circle"></i>
                <span> ${course.Topic} </span>
              </div>
              <div>
                <i class="fas fa-file-signature"></i>
                <span> ${course.assignment} </span>
              </div>
            </div>
            <hr>
            <div class="bottom">
              <i class="${course.progressIcon}"></i>
              <span> ${course.progress} </span>
            </div>
        </div>
    `
})