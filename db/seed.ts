import { db, Teacher, Student, Chat, Class, Department, Subject, Theory, Exercise, Class_Student } from "astro:db";
import { hashPassword } from  '../src/utils/hashPassword';



// https://astro.build/db/seed
export default async function seed() {
	
	await db.insert(Department).values([
	{ id: "1" , location: "Computing Science"},
	])

	await db.insert(Teacher).values([
		{ id: "1" , dni: "20955322E", name: "Profesor A",email: "profesora@mail.com", password: "password", departmentId: "1"},
	])

	await db.insert(Student).values([
		{ id: "1" , nia: "10663305", dni: "20955321E", name: "Profesor A",email: "a@a.a", password: await hashPassword("a")},
	])

	await db.insert(Chat).values([
		{ studentId: "1" , teacherId: "1", date : "2024-05-04", text: "Mondonguero", sender : "student"},
	])

	await db.insert(Class).values([
		{ id: "1" , description: "Computing Science", teacherId:"1"},
	])

	await db.insert(Subject).values([
		{ id: "1" , description: "Computing Science", classId: "1"},
		{ id: "2" , description: "Programming", classId: "1"},
		{ id: "3" , description: "Hardware", classId: "1"},
	])

	await db.insert(Class_Student).values([
		{ classId : "1" , studentId: "1"},
	])

	await db.insert(Theory).values([
		{ subjectId : "1", content : "Mondongo1" }
	])

	await db.insert(Exercise).values([
		{id : "1", description : "Mondongo2", subjectId : "1"}
	])
}
