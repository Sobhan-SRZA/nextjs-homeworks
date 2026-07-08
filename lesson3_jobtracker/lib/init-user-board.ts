import {
    Board,
    Column
} from "./models";
import connectDB from "./db";

const DEFAULT_COLUMNS = [
    {
        name: "Wish List",
        order: 0
    },
    {
        name: "Applied",
        order: 1
    },
    {
        name: "Interviewing",
        order: 2
    },
    {
        name: "Offer",
        order: 3
    },
    {
        name: "Rejected",
        order: 4
    }
]

export async function inializeUserBoard(userId: string) {
    try {
        await connectDB();

        // chack board existing
        const existBoard = Board.findOne({
            userId,
            name: "Job Hint"
        });

        if (existBoard) {
            return existBoard;
        }

        // create board
        const board = await Board.create({
            name: "Job Hint",
            userId,
            columns: []
        })

        // create default columns
        const columns = await Promise.all(
            DEFAULT_COLUMNS.map(({ name, order }) =>
                Column.create({
                    name,
                    order,
                    boardId: board._id,
                    jobApplication: []
                })
            )
        )

        // add columns to board
        board.columns = columns.map(a => a._id);
        await board.save();

        return board;
    }

    catch (e) {
        throw e;
    }
}