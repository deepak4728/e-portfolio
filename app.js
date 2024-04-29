// code for updating profile summary dynamically
let summary=document.querySelector("#summary");
summary.innerHTML="As a second-year BE student in AI & Data Science, I’m exploring Generative AI and Prompt Engineering. I aim to integrate AI models with Web Development, fueled by my passion for Data Science and creative problem-solving.";

// code for updaing certifications dynamically

let certStack=document.querySelector("#certStack");
let certList=[["https://drive.google.com/file/d/10YwhjAWfkhyOvdjATsz2nfKyubacnEsQ/view?usp=sharing","excelda.jpg","Excel Fundamentals for Data Analysis | Coursera"],["https://drive.google.com/file/d/1-_g5k0iCaGBqZY3ttg-GDvQ5d3oTItme/view?usp=sharing","esrc.jpg","Embedded Systems and Robotics Club | MBM University"],["https://drive.google.com/file/d/16B1mRIpZQSQNmsS7is5Chbj6YpHRm_o4/view?usp=drive_link","iai.jpg","Introduction to Artificial Intelligence | Infosys"],["https://drive.google.com/file/d/1RlMKQbzz_9LzKA3u7u_qzy5n2VlJVq5R/view?usp=drive_link","ids.jpg","Introduction to Data Science | Infosys"],["https://drive.google.com/file/d/1rnbDx4jpSTWERVqfoWwDUhThJmtxJAqh/view?usp=drive_link","idl.jpg","Introduction to Deep Learning | Infosys"],["https://drive.google.com/file/d/16Yn1MhJjdMKqlyf_9f-WKc16aXIzddxm/view?usp=drive_link","inlp.jpg","Introduction to Natural Language Processing | Infosys"],["https://drive.google.com/file/d/18qWap5681E_go_RaUNobacC5HCzuwetq/view?usp=drive_link","icv.jpg","Introduction to Computer Vision | Infosys"]];
for(let i=0;i<certList.length;i++){
    let div=document.createElement("div");
    div.classList.add("card")
    div.innerHTML=`<a  href="${certList[i][0]}" target="_blank"><img class="certStackImg" src="static/certificates/${certList[i][1]}" alt="${certList[i][2]}"><p>${certList[i][2]}</p></a>`;
    certStack.appendChild(div);
}
// code for updating skills TechStack dynamically
let techStack=document.querySelector("#techStack");
let skillSet=["c++.png","python.png","javaScript.png","mysql.png","html.png","css.png","bootstrap.png","vscode.png","git.png","github.png","excel.png","photoshop.png"];

for(let i=0;i<skillSet.length;i++){
    let img=document.createElement("img");
    img.src=`static/icons/techStack/${skillSet[i]}`;
    img.alt=skillSet[i];
    techStack.appendChild(img);
}

// code for updaing education dynamically
let c=document.querySelector("#educationList");
let education=["BE in AI & Data Science MBM University, Jodhpur: First Division (Nov 22 – July 23)","JNV, Khairthal, Alwar Class 12th (PCM + CS): First Division with Distinction (April 20–July 21)"];
for(let i=0;i<education.length;i++){
    let li=document.createElement("li");
    li.innerHTML=education[i];
    educationList.appendChild(li);
}

