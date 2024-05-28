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
		{ id: "2" , description: "Maths", teacherId:"1"},
		{ id: "3" , description: "Biology", teacherId:"1"},
	])

	await db.insert(Subject).values([
		{ id: "1" , description: "Compu Science", classId: "1"},
		{ id: "2" , description: "Programming", classId: "1"},
		{ id: "3" , description: "Hardware", classId: "1"},
		{ id: "4" , description: "Sums", classId: "2"},
		{ id: "5" , description: "Subtractions", classId: "2"},
		{ id: "6" , description: "Multiplications", classId: "2"},		
		{ id: "7" , description: "Wild plants", classId: "3"},
		{ id: "8" , description: "Cells", classId: "3"},
	])

	await db.insert(Class_Student).values([
		{ classId : "1" , studentId: "1"},
		{ classId : "2" , studentId: "1"},
		{ classId : "3" , studentId: "1"},
	])

	await db.insert(Theory).values([
		{ subjectId : "1", content : "Do culpa ut ipsum dolore ullamco consectetur qui ad. Culpa ullamco esse anim esse velit. Aliquip tempor mollit pariatur qui magna. Adipisicing ipsum duis amet minim laboris in. Sint incididunt dolore enim veniam minim cupidatat adipisicing occaecat.Commodo culpa ut non duis non ut eu minim aliquip. Magna duis dolore nostrud tempor pariatur. Est elit proident nisi adipisicing aliquip nulla qui in minim quis commodo nulla dolore. Qui adipisicing non ullamco pariatur qui et nisi. Ut occaecat sint dolor minim cupidatat ad do ut velit.Qui ut aliqua nostrud culpa non laborum anim. Lorem consectetur laborum nostrud id adipisicing non esse commodo mollit proident magna laborum incididunt sunt. Cillum officia dolore veniam enim voluptate ullamco proident.Velit dolore occaecat sint ut adipisicing deserunt reprehenderit consectetur minim. Cillum excepteur id laborum esse dolor proident consectetur. Laborum culpa ex mollit dolore enim officia adipisicing commodo adipisicing est pariatur consectetur incididunt. Proident veniam labore nostrud nulla deserunt consequat ex. Laboris nisi reprehenderit enim nisi dolor ullamco id nostrud est et dolore. Velit reprehenderit occaecat eu enim minim reprehenderit do adipisicing proident minim aliquip." },
		{ subjectId : "2", content : "Fugiat amet sint velit laboris ex quis qui ipsum voluptate aliqua sint cillum fugiat ad. Officia sit ut esse nisi ad amet incididunt reprehenderit. Adipisicing et Lorem incididunt velit aliquip reprehenderit pariatur fugiat laboris magna. Proident occaecat anim incididunt eu sit occaecat laborum consectetur et." },

	])

	await db.insert(Exercise).values([
		{id : "1", description : "Exercise 1", subjectId : "1"},
		{id : "2", description : "Exercise 2", subjectId : "1"},
		{id : "3", description : "Exercise 3", subjectId : "1"},
		{id : "4", description : "Exercise 1", subjectId : "2"},
		{id : "5", description : "Exercise 2", subjectId : "2"},
		{id : "6", description : "Exercise 3", subjectId : "2"},
		{id : "7", description : "Exercise 1", subjectId : "3"},
		{id : "8", description : "Exercise 2", subjectId : "3"},
		{id : "9", description : "Exercise 3", subjectId : "3"},
	])
}
