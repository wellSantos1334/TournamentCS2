import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTournament1672352846843 implements MigrationInterface {
   name = 'createTournament1672352846843';

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         `CREATE TABLE "tournaments" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_a6aad75c957ccbd62dca8f8777c" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_cdfcf8cd84720c70c6c593203c2" DEFAULT getdate(), CONSTRAINT "PK_6d5d129da7a80cf99e8ad4833a9" PRIMARY KEY ("id"))`,
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "tournaments"`);
   }
}
