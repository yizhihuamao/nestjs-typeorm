import {MigrationInterface, QueryRunner} from "typeorm";

export class RabbitRefactoring21614475124246 implements MigrationInterface {
    name = 'RabbitRefactoring21614475124246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rabbit" ADD "gender" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rabbit" DROP COLUMN "gender"`);
    }

}
