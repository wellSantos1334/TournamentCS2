import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationTournamentsTeams1673480317512 implements MigrationInterface {
   name = 'RelationTournamentsTeams1673480317512';

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         `CREATE TABLE "tournaments_teams" ("id" int NOT NULL IDENTITY(1,1), "tournamentsId" int NOT NULL, "teamsId" int NOT NULL, CONSTRAINT "PK_d533a35a5ae347c062a10a433db" PRIMARY KEY ("tournamentsId", "teamsId"))`,
      );
      await queryRunner.query(
         `CREATE INDEX "IDX_54b65a639317e8bafadf8f0c9c" ON "tournaments_teams" ("tournamentsId") `,
      );
      await queryRunner.query(`CREATE INDEX "IDX_a9d3693314af56776efc13802c" ON "tournaments_teams" ("teamsId") `);
      await queryRunner.query(
         `ALTER TABLE "tournaments_teams" ADD CONSTRAINT "FK_54b65a639317e8bafadf8f0c9c0" FOREIGN KEY ("tournamentsId") REFERENCES "tournaments"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
      );
      await queryRunner.query(
         `ALTER TABLE "tournaments_teams" ADD CONSTRAINT "FK_a9d3693314af56776efc13802c1" FOREIGN KEY ("teamsId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "tournaments_teams" DROP CONSTRAINT "FK_a9d3693314af56776efc13802c1"`);
      await queryRunner.query(`ALTER TABLE "tournaments_teams" DROP CONSTRAINT "FK_54b65a639317e8bafadf8f0c9c0"`);
      await queryRunner.query(`DROP INDEX "IDX_a9d3693314af56776efc13802c" ON "tournaments_teams"`);
      await queryRunner.query(`DROP INDEX "IDX_54b65a639317e8bafadf8f0c9c" ON "tournaments_teams"`);
      await queryRunner.query(`DROP TABLE "tournaments_teams"`);
   }
}
