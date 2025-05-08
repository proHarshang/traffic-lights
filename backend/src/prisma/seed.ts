import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();

async function main() {
  await prisma.signalConfig.createMany({
    data: [
      {
        intersectionType: "3-way",
        config: {
          signal1: 30,
          signal2: 40,
          signal3: 50,
        },
      },
      {
        intersectionType: "4-way-type1",
        config: {
          signal1: 20,
          signal2: 25,
          signal3: 30,
          signal4: 35,
        },
      },
      {
        intersectionType: "4-way-type2",
        config: {
          signal1: 20,
          signal2: 40,
          signal3: 20,
          signal4: 40,
        },
      },
      {
        intersectionType: "5-way",
        config: {
          signal1: 15,
          signal2: 20,
          signal3: 25,
          signal4: 30,
          signal5: 35,
        },
      },
    ],
  });

  console.log("Database seeded");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
