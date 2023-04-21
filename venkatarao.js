
let schoolLogoEle = document.getElementById("school-logo");
let schoolNameEle = document.getElementById("schoolName");
let schoolAddressEle = document.getElementById("schoolAddress");
let schoolEmailEle = document.getElementById("school-email");
let schoolPhoneEle = document.getElementById("school-phone");
let studentRollNoEle = document.getElementById("studentRollNo");
let studentFatherNameEle = document.getElementById("studentFatherName");
let studentClassEle = document.getElementById("studentClass");
let studentNameEle = document.getElementById("studentName");
let studentMotherNameEle = document.getElementById("studentMotherName");
let studentDobEle = document.getElementById("studentDob");

function displaySchoolAndStudentDetails(studentAndSchoolDetails){
    const{studentName,fatherName,motherName,schoolName,schoolEmail,schoolAddress,rollNumber,schoolLogo,ClassName,schoolPhoneNumber,sectionName,dateOfBirth} = studentAndSchoolDetails

    schoolLogoEle.src = schoolLogo;
    schoolNameEle.textContent = schoolName;
    schoolAddressEle.textContent = schoolAddress;
    schoolEmailEle.textContent = `Visit us at: ${schoolEmail}`;
    schoolPhoneEle.textContent = `Ph: ${schoolPhoneNumber}`;
    studentRollNoEle.textContent = `Roll No: ${rollNumber}`;
    studentFatherNameEle.textContent = `Father's Name: ${fatherName}`;
    studentClassEle.textContent = `Class: ${ClassName} - ${sectionName}`;
    studentNameEle.textContent = `Name of Student: ${studentName}`;
    studentMotherNameEle.textContent = `Mother's Name: ${motherName}`;
    studentDobEle.textContent = `Date of Birth: ${dateOfBirth}`;
}

const apiUrl = 'http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521';

fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const lstStudentInfo = data.Response.ProgressList.lstStudentInfo;
    console.log(lstStudentInfo); // do something with lstStudentInfo
    let studentObject = lstStudentInfo.map(student=>{
        return {
            studentName : student.Name,
            fatherName: student.FatherName,
            motherName: student.MotherName,
            schoolName:student.SchoolName,
            schoolEmail:student.SchoolEmail,
            schoolAddress:student.SchoolAddress,
            rollNumber:student.RollNumber,
            schoolLogo:student.SchoolLogo,
            ClassName:student.ClassName,
            schoolPhoneNumber:student.SchoolPhoneNumber,
            sectionName:student.SectionName,
            dateOfBirth:student.DOB
        }
    })

    let studentAndSchoolDetails = studentObject[0]
    displaySchoolAndStudentDetails(studentAndSchoolDetails)

    //console.log(studentAndSchoolDetails);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  let studentTotalEle = document.getElementById("studentTotal");
let studentResultEle = document.getElementById("studentResult");
let studentPercentageEle = document.getElementById("studentPercentage");
let studentGradeEle = document.getElementById("studentGrade");
let totalMarks = 600;
let studentSecuredMarks = parseInt(studentTotalEle.textContent);
console.log(studentSecuredMarks);
let percentage = Math.floor((studentSecuredMarks / totalMarks) * 100);
console.log(percentage);
studentPercentageEle.textContent = `Percentage:- ${percentage} %`;
if (33 < percentage <= 100) {
    studentResultEle.textContent = `Result:- ${"PASS"}`;
} else {
    studentResultEle.textContent = `Result:- ${"FAIL"}`;
}

if (percentage>=91 && percentage <= 100) {
    studentGradeEle.textContent = `Grade:- ${"A1"}`;
} else if (percentage>=81 && percentage <= 900) {
    studentGradeEle.textContent = `Grade:- ${"A2"}`;
} else if (percentage>=71 && percentage <= 80){
    studentGradeEle.textContent = `Grade:- ${"B1"}`;
} else if(percentage>=61 && percentage <= 70) {
    studentGradeEle.textContent = `Grade:- ${"B2"}`;
} else if (percentage>=51 && percentage <= 60) {
    studentGradeEle.textContent = `Grade:- ${"C1"}`;
} else if (percentage>=41 && percentage <= 50) {
    studentGradeEle.textContent = `Grade:- ${"C2"}`;
} else if (percentage>=34 && percentage <= 40){
    studentGradeEle.textContent = `Grade:- ${"D"}`;
} else {
    studentGradeEle.textContent = `Grade:- ${"E"}`;
}