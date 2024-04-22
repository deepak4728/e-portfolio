// let h3=document.querySelector('.section1 h3');
// let name=h3.innerText;
// console.log(name);
// let dis='';

// for(let i=0;i<name.length;i++){
//     dis=dis+name[i];
    
//     setInterval(()=>{
//         h3.innerText=dis;
//         console.log("hi");
//     },2000);
// }

// code for updating profile summary dynamically
let summary=document.querySelector("#summary");
summary.innerHTML="As a second-year BE student in AI & Data Science, I’m exploring Generative AI and Prompt Engineering. I aim to integrate AI models with Web Development, fueled by my passion for Data Science and creative problem-solving.";

// code for updating skills dynamically
let skillsList=document.querySelector("#skillsList");
let skills=["<b>Languages:</b> C, C++, Python, JavaScript","<b>Development:</b> HTML, CSS, Bootstrap, Git, GitHub, Django","<b>Libraries:</b> Numpy, Pandas, Matplotlib","<b>Database:</b> MySQL","<b>Soft Skills:</b> Problem Solving & Critical Thinking, Leadership, Public Speaking, Writing, Time Management","Data Analytics, MS-Excel & Advanced Excel","Competitive programming with DSA and OOPS","Graphic Design- Adobe Photoshop"];

for(let i=0;i<skills.length;i++){
    let li=document.createElement("li");
    li.innerHTML=skills[i];
    skillsList.appendChild(li);
}

// code for updaing education dynamically
let educationList=document.querySelector("#educationList");
let education=["BE in AI & Data Science MBM University, Jodhpur: First Division (Nov 22 – July 23)","JNV, Khairthal, Alwar Class 12th (PCM + CS): First Division with Distinction (April 20–July 21)"];
for(let i=0;i<education.length;i++){
    let li=document.createElement("li");
    li.innerHTML=education[i];
    educationList.appendChild(li);
}

// code for updaing certifications dynamically
let certificateList=document.querySelector("#certificateList");
let certificate=["<a href='https://disha.mbm.ac.in/certificate/1423' target='_blank'>Embedded Systems and Robotics Club | MBM University</a>","<a href='https://coursera.org/verify/CM7JMTAEVAKA'>Excel Fundamentals for Data Analysis Certificate</a>","Introduction to Artificial Intelligence | Infosys Springboard","Introduction to Data Science | Infosys Springboard","Introduction to Natural Language Processing | Infosys Springboard","Introduction to Deep Learning | Infosys Springboard"];
for(let i=0;i<certificate.length;i++){
    let li=document.createElement("li");
    li.innerHTML=certificate[i];
    certificateList.appendChild(li);
}