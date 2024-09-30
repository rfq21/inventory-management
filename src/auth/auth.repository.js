import prisma from "../db";

async function createUser(userData) {

    try {
        return await prisma.user.create({data: userData});

    } catch (error) {
        throw new Error('Failed to create user in repository');
    }

}

export default {createUser}