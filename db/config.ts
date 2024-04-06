import { defineDb, defineTable, column } from 'astro:db';

const Department = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    location : column.text()
  }
})

const Teacher = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    dni : column.text({ unique : true }),
    name : column.text({ unique : true }),
    email : column.text({ unique : true }),
    password : column.text(),
    departmentId : column.text({ references : () => Department.columns.id})
  }
})

const Student_Teacher = defineTable ({
  columns : {
    studentId : column.text({ references :  () => Student.columns.id }),
    teacherId :  column.text({ references :  () => Teacher.columns.id}),
  }
})

const Student = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    nia : column.text({ unique : true }),
    dni : column.text({ unique : true }),
    name : column.text({ unique : true }),
    email : column.text({ unique : true }),
    password : column.text(),
  }
})

const Class_Student = defineTable ({
  columns : {
    classId : column.text({ references : () => Class.columns.id }),
    studentId: column.text({ references : () => Student.columns.id }),
  }
})

const Class = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    description : column.text(),
    teacherId : column.text({ references : () => Teacher.columns.id }),
  }
})

const Subject = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    description : column.text(),
    classId : column.text({ references : () => Class.columns.id }),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables : { Teacher, Student_Teacher, Student, Class_Student, Class, Department, Subject },
})