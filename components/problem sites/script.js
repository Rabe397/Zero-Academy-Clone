//courses-section
const sitesContainer = document.querySelector(".sites-container");

let sitesData = [
    {
        id : 1,
        title : "CodeForces",
        level : "Professional",
        img: "../../images/problem sites/codeforces.png" ,
        solution : "0",
        num: "0",
        percent : "0",
        
    },
    {
        id : 2,
        title : "Codewars",
        level : "Medium",
        img: "../../images/problem sites/codewars.png" ,
        solution : "80",
        num: "76",
        percent : "16",
        
    },
    {
        id : 3,
        title : "Edabit",
        level : "Easy",
        img: "../../images/problem sites/edabit.png" ,
        solution : "1",
        num: "0",
        percent : "0",
        
    },
    
    {
        id : 4,
        title : "HackerRank",
        level : "Medium",
        img: "../../images/problem sites/hackerrank.png" ,
        solution : "17",
        num: "1",
        percent : "0.2",
        
    },
    {
        id : 5,
        title : "LeetCode",
        level : "Professional",
        img: "../../images/problem sites/leetcode.png" ,
        solution : "4",
        num: "17",
        percent : "3.4",
        
    }
]

sitesData.map((site)=>{
    sitesContainer.innerHTML += `
        <div class="sites-box">
           <div class="upper flex-full">
              <div class="upper-first">
                <a> ${site.title} </a>
                <p> ${site.level} Level </p>
              </div>
              <div class="img-container">
                <img src="${site.img}" alt="${site.title}">
              </div>
            </div>
            <hr>
            <div class="mid">
              <div>
                <i class="fas fa-code"></i> 
                <span> ${site.solution} Solution </span>
              </div>
              <div>
                <i class="far fa-dot-circle"></i>
                <span> ${site.num} From 500</span>
              </div>
              <div>
                <i class="fas fa-percentage"></i>
                <span> ${site.percent} % </span>
              </div>
            </div>
        </div>
    `
})

