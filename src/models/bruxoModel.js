// é no model que fazemos a consulta para o banco de dados
// ex: SELECT * FROM bruxos; porém no prisma vamos usar comandos
// que abstrai a query mas ainda sim é query para o BD

// Importar o prisma client
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const encontreTodos = async () => {
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const encontreUm = async (id) => {
    return await prisma.bruxo.findUnique({
        where: { id: Number(id) }
    })
}