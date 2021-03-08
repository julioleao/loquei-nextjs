import { connect } from '../../utils/database';


/* import { connectToDatabase } from '../../utils/database';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const data = await db.collection("users").find({}).toArray();

    res.json(data);

} */
/*
export default async function user(req, res) {
    const { db } = await connect();
    try {
        const users = await req.db.collection("users").find([]);
        console.log(db);
        res.send(users);

    } catch (error) {
        console.log(error);
    }





} */