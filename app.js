// code for updating profile summary dynamically
let summary=document.querySelector("#summary");
summary.innerHTML="\"Unleashing the power of AI & Data Science, I'm a second-year BE student making strides in Generative AI and Prompt Engineering. My ambition? To revolutionize Web Development by integrating it with advanced AI models. Driven by a deep passion for Data Science and an innovative problem-solving approach, <i>I'm not just studying the future, I'm creating it.</i>\"";

// projects section code
let projectStack=document.querySelector("#projectStack");
let projectList=[["https://deepak4728.github.io/TechVerseX/","TechVerseX.png","<b><i>TechverseX</b></i> is a dynamic web platform that bridges the gap between aspiring students and valuable opportunities"],["https://github.com/deepak4728/StudyPods-v4.0/tree/main/SP0410","autoML.png","<b><i>AutoML</b></i> Simplifys Custom Model Creation. Data Profiling Highlights issues like missing values and outliers."]];
for (let i=0; i<projectList.length; i++){
    let div=document.createElement("div");
    div.classList.add("card")
    div.innerHTML=`<a class="flex" href="${projectList[i][0]}" target="_blank"><img class="certStackImg" src="static/projectStack/${projectList[i][1]}" alt="${projectList[i][2]}"><p>${projectList[i][2]}</p></a>`;
    projectStack.appendChild(div);
}

// code for updaing certifications dynamically
let certStack=document.querySelector("#certStack");
let certList=[["https://drive.google.com/file/d/10YwhjAWfkhyOvdjATsz2nfKyubacnEsQ/view?usp=sharing","excelda.jpg","Excel Fundamentals for Data Analysis | Coursera"],["https://drive.google.com/file/d/1-_g5k0iCaGBqZY3ttg-GDvQ5d3oTItme/view?usp=sharing","esrc.jpg","Embedded Systems and Robotics Club | MBM University"],["https://drive.google.com/file/d/16B1mRIpZQSQNmsS7is5Chbj6YpHRm_o4/view?usp=drive_link","iai.jpg","Artificial Intelligence | Infosys"],["https://drive.google.com/file/d/1RlMKQbzz_9LzKA3u7u_qzy5n2VlJVq5R/view?usp=drive_link","ids.jpg","Data Science | Infosys"],["https://drive.google.com/file/d/1rnbDx4jpSTWERVqfoWwDUhThJmtxJAqh/view?usp=drive_link","idl.jpg","Deep Learning | Infosys"],["https://drive.google.com/file/d/16Yn1MhJjdMKqlyf_9f-WKc16aXIzddxm/view?usp=drive_link","inlp.jpg","Natural Language Processing | Infosys"],["https://drive.google.com/file/d/18qWap5681E_go_RaUNobacC5HCzuwetq/view?usp=drive_link","icv.jpg","Computer Vision | Infosys"]];
for(let i=0;i<certList.length;i++){
    let div=document.createElement("div");
    div.classList.add("card")
    div.innerHTML=`<a class="flex" href="${certList[i][0]}" target="_blank"><img class="certStackImg" src="static/certStack/${certList[i][1]}" alt="${certList[i][2]}"><p>${certList[i][2]}</p></a>`;
    certStack.appendChild(div);
}

// code for updating skills TechStack dynamically
let techStack=document.querySelector("#techStack");
let skillSet=["c++.png","python.png","javaScript.png","mysql.png","html.png","css.png","bootstrap.png","git.png","github.png","excel.png","photoshop.png"];

for(let i=0;i<skillSet.length;i++){
    let img=document.createElement("img");
    img.src=`static/techStack/${skillSet[i]}`;
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

