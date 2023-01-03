import { MigrationInterface, QueryRunner } from 'typeorm';

export class TeamCreate1672779872987 implements MigrationInterface {
   name = 'TeamCreate1672779872987';

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         `CREATE TABLE "teams" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_9dbf2f9eb500fa2608fdf35a3dc" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_3a233036e6ef4e93f3b92182479" DEFAULT getdate(), CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`,
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "teams"`);
   }
}
