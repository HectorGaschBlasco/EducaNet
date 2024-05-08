import { db, like, Student } from "astro:db";

export async function getSingleStudent ( LogIn_name : string ) : Promise < { id : string ; name : string ; email : string ; nia : string ; dni : string ; password : string }[]  > {
    return await db.select().from(Student).where(like(Student.name, LogIn_name));
}