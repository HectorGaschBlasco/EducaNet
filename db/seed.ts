import { db, Teacher, Student_Teacher, Student, Class_Student, Class, Department, Subject } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	 db.insert(Teacher).values([
		{ id: '1' , dni: '20955322E', name: 'Profesor A',email: 'profesora@mail.com', password: 'password', departmentId: '1'},
	])
	
	 db.insert(Department).values([
	{ id: '1' , location: 'Computing Science'},
	])

	 db.insert(Student).values([
		{ id: '1' , nia: '10663305', dni: '20955322E', name: 'Profesor A',email: 'profesora@mail.com', password: 'password'},
		])

	 db.insert(Student_Teacher).values([
		{ studentId: '1' , teacherId: '1'},
		])

	 db.insert(Class_Student).values([
		{ classId: '1' , studentId: '1'},
		])

	 db.insert(Class).values([
		{ id: '1' , description: 'Computing Science', teacherId:'1'},
		])

	 db.insert(Subject).values([
		{ id: '1' , description: 'Computing Science', classId: '1'},
		])
}
