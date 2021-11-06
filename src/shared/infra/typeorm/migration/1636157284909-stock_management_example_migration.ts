import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class stockManagementExampleMigration1636157284909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'example_table',
            columns: [
                new TableColumn({
                    name: 'id_example_table',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                }),
                new TableColumn({
                    name: 'name',
                    type: 'varchar(255)',
                    isNullable: false,
                }),
                new TableColumn({
                    name: 'created_at',
                    type: 'datetime',
                    isNullable: false,
                    default: 'now()'
                }),
                new TableColumn({
                    name: 'updated_at',
                    type: 'datetime',
                    isNullable: false,
                    default: 'now()'
                }),
                new TableColumn({
                    name: 'deleted_at',
                    type: 'datetime',
                    isNullable: true,
                }),
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('example_table')
    }

}
