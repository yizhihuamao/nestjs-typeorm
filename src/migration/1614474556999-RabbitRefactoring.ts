import { MigrationInterface, QueryRunner } from "typeorm";

export class RabbitRefactoring1614474556999 implements MigrationInterface {
    name = 'RabbitRefactoring1614474556999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rabbit" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" character varying, "owner" character varying, CONSTRAINT "PK_b0d15beefab2cd45c9dd57071e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "rabbit"`);
    }

}
