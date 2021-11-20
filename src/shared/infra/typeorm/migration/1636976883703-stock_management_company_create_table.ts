import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class stockManagementCompanyCreateTable1636976883703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'general_company',
                columns: [
                    new TableColumn({
                        name: 'id_general_company',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    }),
                    new TableColumn({
                        name: 'company_name',
                        type: 'varchar',
                        isNullable: false,
                    }),
                    new TableColumn({
                        name: 'company_code',
                        type: 'varchar',
                        isNullable: false,
                    }),
                    new TableColumn({
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('general_company')
    }

}
