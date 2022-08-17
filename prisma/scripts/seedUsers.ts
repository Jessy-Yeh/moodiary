import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.users.upsert({
    where: {
      id: 0,
    },
    update: {},
    create: {
      name: "Jessy Yeh",
      moods: {
        create: {
          status: "sad",
          date: "2022-08-02",
          text: "I'm so sad today",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
