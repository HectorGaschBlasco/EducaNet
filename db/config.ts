import { componentIsHTMLElement } from 'astro/runtime/server/render/dom.js';
import { date } from 'astro/zod';
import { defineDb, defineTable, column } from 'astro:db';

const Department = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    location : column.text()
  }
})

const Student = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    name : column.text({ unique : true }),
    email : column.text({ unique : true }),
    nia : column.text({ unique : true }),
    dni : column.text({ unique : true }),
    password : column.text(),
  }
})

const Teacher = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    dni : column.text({ unique : true }),
    name : column.text({ unique : true }),
    email : column.text({ unique : true }),
    password : column.text(),
    departmentId : column.text({ references : () => Department.columns.id}),
  }
})

const Chat = defineTable ({
  columns : {
    studentId : column.text({ references :  () => Student.columns.id }),
    teacherId :  column.text({ references :  () => Teacher.columns.id}),
    date : column.text(),
    text : column.text(),
    sender : column.text(),
  }
})

const Class_Student = defineTable ({
  columns : {
    classId : column.text({ references : () => Class.columns.id }),
    studentId : column.text({ references : () => Student.columns.id }),
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

const Theory = defineTable({
  columns : {
    subjectId : column.text({ references : () => Subject.columns.id, primaryKey : true }),
    content : column.text()
  }
})

const Exercise = defineTable({
  columns : {
    id : column.text({ primaryKey : true }),
    description : column.text(),
    subjectId : column.text({ references : () => Subject.columns.id }),
  }
})

const Exercise_Student = defineTable({
  columns : {
    exerciseId : column.text({ references : () => Exercise.columns.id }),
    studentId : column.text({ references : () => Student.columns.id }),
    answer : column.text()
  }
})


// https://astro.build/db/config
export default defineDb({
  tables : { Teacher, Chat, Student, Class_Student, Class, Department, Subject, Theory, Exercise},
})