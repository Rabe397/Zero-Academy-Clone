//courses-section
const coursesContainer = document.querySelector(".courses-container");

let coursesData = [
    {
        id : 1,
        title : "Before Programming",
        year : "2022 - 2023",
        img: "../../images/learning-courses/before-programming.svg" ,
        time : "34 Minutes",
        lesson : "10 Lessons",
        assignment: "No Assignments",
        studyPlan : " No Study Plan",
        progress : "In Progress",
        progressIcon : "fas fa-cog fa-spin",
    },
    {
        id : 2,
        title : "Bootstrap 5 Designs",
        year : "2022",
        img: "../../images/learning-courses/bootstrap-5-designs.svg" ,
        time : "2 Hours, 4 Minutes",
        lesson : " 1 Design",
        assignment: "No Assignments",
        studyPlan : " No Study Plan",
        progress : "In Progress",
        progressIcon : "fas fa-cog fa-spin",
    },
    {
        id : 3,
        title : "Css",
        year : "2021",
        img: "../../images/learning-courses/css-course.svg" ,
        time : "11 Hours, 28 Minutes",
        lesson : "88 Lessons",
        assignment: "76 Assignments",
        studyPlan : "Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 4,
        title : "ECMAScript 6",
        year : "2019",
        img: "../../images/learning-courses/ecmascript6.svg" ,
        time : "6 Hours, 44 Minutes",
        lesson : "52 Lessons",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 5,
        title : "Front-End Tutorials",
        year : "Always Updating",
        img: "../../images/learning-courses/front-end-tutorials.svg" ,
        time : "11 Hours, 24 Minutes",
        lesson : " 34 Tutorials",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Always Open",
        progressIcon: "fas fa-infinity",
    },
    {
        id : 6,
        title : "Functions Implement",
        year : "Always Updating",
        img: "../../images/learning-courses/functions-implement.svg" ,
        time : "49 Minutes",
        lesson : "9 Lessons",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Always Open",
        progressIcon: "fas fa-infinity",
    },
    {
        id : 7,
        title : "Git & GitHub",
        year : "2019",
        img: "../../images/learning-courses/git-and-github.svg" ,
        time : "2 Hours, 30 Minutes",
        lesson : "20 Lessons",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 8,
        title : "HTML",
        year : "2021",
        img: "../../images/learning-courses/html-course.svg" ,
        time : "4 Hours, 12 Minutes",
        lesson : "37 Lessons",
        assignment: "33 Assignments",
        studyPlan : "Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 9,
        title : "HTML & CSS Practice",
        year : "2021",
        img: "../../images/learning-courses/html-and-css-practice.svg" ,
        time : "16 Hours, 46 Minutes",
        lesson : "4 Designs",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 10,
        title : "Javascript",
        year : "2015",
        img: "../../images/learning-courses/javascript-bootcamp.svg" ,
        time : "14 Hours, 3 Minutes",
        lesson : "65 Lessons",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 11,
        title : "JavaScript Bootcamp",
        year : "2021",
        img: "../../images/learning-courses/javascript-bootcamp.svg" ,
        time : "19 Hours, 23 Minutes",
        lesson : "188 Lessons",
        assignment: "120 Assignments",
        studyPlan : "Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 12,
        title : "Javascript OOP",
        year : "2020",
        img: "../../images/learning-courses/javascript-bootcamp.svg" ,
        time : "3 Hours",
        lesson : "26 Lessons",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 13,
        title : "Jest Unit Testing",
        year : "2020",
        img: "../../images/learning-courses/jest-unit-testing.svg" ,
        time : "2 Hours, 15 Minutes",
        lesson : "20 Lessons",
        assignment: "No Assignments",
        studyPlan : "No Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 14,
        title : "Problems Solving",
        year : "Always Updating",
        img: "../../images/learning-courses/problems-solving.svg" ,
        time : "2 Hours, 1 Minute",
        lesson : "18 Lessons",
        assignment: "No Assignments",
        studyPlan : " No Study Plan",
        progress : "In Progress",
        progressIcon : "fas fa-cog fa-spin",
    },
    {
        id : 15,
        title : "SASS",
        year : "2021",
        img: "../../images/learning-courses/sass-course.svg" ,
        time : "2 Hours",
        lesson : "19 Lessons",
        assignment: "24 Assignments",
        studyPlan : "Study Plan",
        progress : "Completed",
        progressIcon: "fas fa-check-double",
    },
    {
        id : 16,
        title : "Typescript",
        year : "2022",
        img: "../../images/learning-courses/typescript.svg" ,
        time : "3 Hours, 21 Minutes",
        lesson : "38 Lessons",
        assignment: "26 Assignments",
        studyPlan : "Study Plan",
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
                <i class="far fa-clock"></i>
                <span> ${course.time} </span>
              </div>
              <div>
                <i class="far fa-play-circle"></i>
                <span> ${course.lesson} </span>
              </div>
              <div>
                <i class="fas fa-file-signature"></i>
                <span> ${course.assignment} </span>
              </div>
              <div>
                <i class="fas fa-chalkboard-teacher"></i>
                <span> ${course.studyPlan} </span>
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