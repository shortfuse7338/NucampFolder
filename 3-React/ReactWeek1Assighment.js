class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community
    }
}

class Bootcamp {
    constructor (name, level, students = [] ) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student){
        let studentexists=this.students.some(s => s.email === student.email);
        if (!studentexists){
            this.students.push(student);
            console.log("Registering "+student.email+"to the bootcamp "+this.name);
        }
    }
};