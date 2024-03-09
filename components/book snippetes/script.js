//main-sec-in-big-section
const data=[
    {
        id:1,
        anchor: "Desicions are Promises",
        p: "So it's up to you",
        bookName: "The most effective way to get works done",
        firstDivSpan: 45,
        secondDivSpan: "23/5/2022",
    },
    {
        id:2,
        anchor: "Split the project",
        p: "This make it easy to focus on it",
        bookName: "The most effective way to get works done" ,
        firstDivSpan: 450,
        secondDivSpan: "3/7/2023",
    },
    {
        id:3,
        anchor: "The way to get things done",
        p: "Save your Energy",
        bookName: "The most effective way to get works done" ,
        firstDivSpan: 280,
        secondDivSpan: "15/4/2023",
    },
    {
        id:4,
        anchor: "Say welecome to change",
        p: "Accept it!",
        bookName: "Who move my cheese" ,
        firstDivSpan: 233,
        secondDivSpan: "23/8/2022",
    },
    {
        id:5,
        anchor: "Life",
        p: "Isn't one way",
        bookName: "Who move my cheese" ,
        firstDivSpan: 285,
        secondDivSpan: "2/1/2023",
    },
    {
        id:6,
        anchor: "Change your way of thinking",
        p: "To live better",
        bookName: "Your heart is your guide",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:7,
        anchor: "Luck",
        p: "Count or not?!..",
        bookName: "Your heart is your guide",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:8,
        anchor: "Working just for money",
        p: "Perform Fishing but hate Fish",
        bookName: "Your heart is your guide",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:9,
        anchor: "Talent",
        p: "Don't compare!!",
        bookName: "Your heart is your guide",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    {
        id:10,
        anchor: "Forgiveness",
        p: "For you!!",
        bookName: "Your heart is your guide",
        firstDivSpan: 280,
        secondDivSpan: "23/7/2023",
    },
    
]

//pagination
let currentValue = 1;
let pags = document.querySelectorAll(".pag li");
let mainSide = document.querySelector(".main-side");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

//clicking on page number function
const pagination = ()=>{
    pags.forEach((pag)=>{
        pag.classList.remove("active");
    })
    event.target.classList.add("active");
    currentValue = event.target.value;
    mainSide.innerHTML = "";
    if(currentValue === 1){
        data.map((article , index)=>{
            if (index < 5 ){
                mainSide.innerHTML +=`
                   <div class="main-side-box">
                      <a href=""> ${article.anchor} </a>
                      <p> ${article.p} </p>
                      <hr>
                      <div class="book-info flex-full">
                        <span>Book</span>
                        <span class="book-name"> ${article.bookName} </span>
                      </div>
                      <hr>
                      <div class="icons flex-full">
                        <div>
                           <span> ${article.firstDivSpan} </span>
                           <i class="fas fa-eye"></i>
                        </div>
                        <div>
                          <span> ${article.secondDivSpan} </span>
                          <i class="fas fa-calendar-alt"></i>
                        </div>
                      </div>
                    </div>
                `
            }
        })
    }else{
        data.map((article , index)=>{
            if (index > 4 && index < 11){
                mainSide.innerHTML +=`
                <div class="main-side-box">
                   <a href=""> ${article.anchor} </a>
                   <p> ${article.p} </p>
                   <hr>
                   <div class="book-info flex-full">
                        <span>Book</span>
                        <span class="book-name"> ${article.bookName} </span>
                    </div>
                    <hr>
                   <div class="icons flex-full">
                     <div>
                        <span> ${article.firstDivSpan} </span>
                        <i class="fas fa-eye"></i>
                     </div>
                     <div>
                       <span> ${article.secondDivSpan} </span>
                       <i class="fas fa-calendar-alt"></i>
                     </div>
                   </div>
                </div>
                `
            }
        })
    }
}

//pagination by buttons(arrows)
//next-button
nextBtn.onclick= ()=>{
    if( currentValue = 1){
        pags.forEach((pag)=>{
            pag.classList.remove("active");
                
        })
    
    currentValue++;
    pags[currentValue-1].classList.add("active");
    mainSide.innerHTML = "";
    
    data.map((article , index)=>{
        if (index > 4 && index < 11){
        mainSide.innerHTML +=`
        <div class="main-side-box">
           <a href=""> ${article.anchor} </a>
           <p> ${article.p} </p>
           <hr>
           <div class="book-info flex-full">
                <span>Book</span>
                <span class="book-name"> ${article.bookName} </span>
            </div>
            <hr>
           <div class="icons flex-full">
             <div>
            <span> ${article.firstDivSpan} </span>
            <i class="fas fa-eye"></i>
             </div>
             <div>
               <span> ${article.secondDivSpan} </span>
               <i class="fas fa-calendar-alt"></i>
             </div>
           </div>
        </div>
        `
        }
    })
    
 }   
}
//previous-button
prevBtn.onclick= ()=>{
    if(currentValue = 2){
        pags.forEach((pag)=>{
            pag.classList.remove("active");
            
        })
        
    currentValue--;
    pags[currentValue-1].classList.add("active");
    mainSide.innerHTML = "";
    data.map((article , index)=>{
        if (index < 5  ){
        mainSide.innerHTML +=`
        <div class="main-side-box">
           <a href=""> ${article.anchor} </a>
           <p> ${article.p} </p>
           <hr>
           <div class="book-info flex-full">
                <span>Book</span>
                <span class="book-name"> ${article.bookName} </span>
            </div>
            <hr>
           <div class="icons flex-full">
              <div>
                <span> ${article.firstDivSpan} </span>
                <i class="fas fa-eye"></i>
              </div>
              <div>
                <span> ${article.secondDivSpan} </span>
                <i class="fas fa-calendar-alt"></i>
              </div>
            </div>
        </div>
        `
        }
    })
 }
} 

