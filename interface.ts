namespace Studentlister {
  export interface Student {
    name: string;
    college: string;
    }

  export function printd(student: Student) {
    console.log(` Student details are : ${student.name} from ${student.college}`);
  }
  };
  
  let me: Studentlister.Student = { name: "Pawan", college: "NITUK"}
  Studentlister.printd(me);