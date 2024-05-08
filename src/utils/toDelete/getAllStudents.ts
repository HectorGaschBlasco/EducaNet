import { db, Student } from "astro:db";

export async function getAllStudents(): Promise < { id: string; name: string; email: string; nia: string; dni: string; password: string } [] > {
    return await db.select().from(Student);
}

