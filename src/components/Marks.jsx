import React, { useState } from "react";

export default function Marks() {
  const [students_Array,setStudents_Array] = useState([
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 100,
        science: 100,
        social: 100,
        kannada: 100,
        english: 100,
        hindi: 100,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 100,
        science: 100,
        social: 100,
        kannada: 30,
        english: 100,
        hindi: 100,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
    {
      name: "John",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
    {
      name: "",
      roll: 1,
      class: "III",
      school: "KPT",
      marks: {
        maths: 35,
        science: 35,
        social: 80,
        kannada: 35,
        english: 35,
        hindi: 35,
      },
    },
  ]);

  
  function add(index) {
    let marks_Obj = students_Array[index].marks;
    let i = 0;

    Object.keys(marks_Obj).forEach((e) => {
      i += marks_Obj[e];
    });

    return i;
  }
  
  function result(index) {
    let marks_Obj = students_Array[index].marks;
    let subjects_Arr = Object.keys(marks_Obj);
    
    let result = "Pass";

    for (let index_Loop in subjects_Arr) {
      const subject = subjects_Arr[index_Loop];
      
      if (marks_Obj[subject] < 35) {
        result = "Fail";
        return result;
      }
    }
    return result;
  }

  
  // Styles 

  function marksColor(mark) {
     if(mark < 35){
      return "red";
     } 
     return "inherit";
  }

  function deleteStudent(student){
    setStudents_Array(students_Array.filter((e)=> e !== student))
  }

  
  let tablePadding = '20px 25px'
  
  const styleHeading = {
    padding : tablePadding ,
    textDecoration : 'underline',
    textDecorationColor : 'gray',
    textDecorationStyle : 'wavy',
    textUnderlineOffset : '7px'
  }

  return (
    <div>
      <table style={{ textAlign: "center" ,padding : '50px',backgroundColor : 'white', fontFamily : 'monospace', fontSize : '20px' ,boxShadow : '0 6px 10px rgba(0,0,0,.3)'}}>
        <thead>
          <tr>
            <th style={ styleHeading } >Sl.No</th>
            <th style={ styleHeading } >Name</th>
            <th style={ styleHeading } >Roll No</th>
            <th style={ styleHeading } >Class</th>
            <th style={ styleHeading } >School</th>
            <th style={ styleHeading } >Maths</th>
            <th style={ styleHeading } >Science</th>
            <th style={ styleHeading } >Social Science</th>
            <th style={ styleHeading } >Kannada</th>
            <th style={ styleHeading } >English</th>
            <th style={ styleHeading } >Hindi</th>
            <th style={ styleHeading } >Total Marks</th>
            <th style={ styleHeading } >Result</th>
            <th style={ styleHeading } >Delete</th>
          </tr>
        </thead>
        <tbody style={{color : "rgba(0,0,0,0.7)"}}>
          {students_Array.map((student, index) => {
            return (
              <tr key={index + 1}>
                <td  style={ { padding : tablePadding  } }  key={index + 0}> {index + 1} </td>
                <td  style={ { padding : tablePadding  } }  key={index + 1}> {student.name === ''?'No data':student.name} </td>
                <td  style={ { padding : tablePadding  } }  key={index + 2}> {student.roll === '' ? "No data" : student.roll} </td>
                <td  style={ { padding : tablePadding  } }  key={index + 3}> {student.class === '' ? "No data" : student.class} </td>
                <td  style={ { padding : tablePadding  } }  key={index + 4}> {student.school === '' ? "No data" : student.school} </td>
                <td  style={ { padding : tablePadding , color : marksColor(student.marks.maths) } }  key={index + 5}> {student.marks.maths} </td>
                <td  style={ { padding : tablePadding , color : marksColor(student.marks.science) } }  key={index + 6}> {student.marks.science} </td>
                <td  style={ { padding : tablePadding , color : marksColor(student.marks.social) } }  key={index + 7}> {student.marks.social} </td>
                <td  style={ { padding : tablePadding , color : marksColor(student.marks.kannada) } }  key={index + 8}> {student.marks.kannada} </td>
                <td  style={ { padding : tablePadding , color : marksColor(student.marks.english) } }  key={index + 9}> {student.marks.english} </td>
                <td  style={ { padding : tablePadding , color : marksColor(student.marks.hindi) } }  key={index + 10}> {student.marks.hindi} </td>
                <td  style={ { padding : tablePadding  } }  key={index + 11}> {add(index)} </td>
                <td  style={ { padding : tablePadding ,color : result(index) === 'Pass' ? 'green' : 'red'} }  key={index + 12}>{result(index)}</td>
                <td  style={ { padding : tablePadding  } }  key={index + 12}> <button style={{padding : '5px 10px'}} onClick={()=>{deleteStudent(student)}} >Delete</button> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
