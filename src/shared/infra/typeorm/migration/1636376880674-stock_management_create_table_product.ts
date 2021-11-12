import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class stockManagementCreateTableProduct1636376880674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(new Table({
        //     name: 'equipment_type',
        //     columns: [
        //         new TableColumn({
        //             name: 'id_equipment_type',
        //             type: 'int',
        //             isPrimary: true,
        //             isGenerated: true,
        //             generationStrategy: 'increment',
        //             isNullable: false
        //         }),
        //     ]
        // }))

        await queryRunner.createTable(new Table({
            name: 'general_product',
            columns: [
                new TableColumn({
                    name: 'id_general_product',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false
                }),

                new TableColumn({
                    name: 'serial_number',
                    type: 'int',
                    isNullable: true
                }),

                new TableColumn({
                    name: 'id_general_company',
                    type: 'int',
                    isNullable: false
                }),

                new TableColumn({
                    name: 'description',
                    type: 'varchar(255)',
                    isNullable: false
                }),

                new TableColumn({
                    name: 'id_equipment_type',
                    type: 'int',
                    isNullable: false
                }),

                new TableColumn({
                    name: 'quantity',
                    type: 'int',
                    isNullable: true
                })
            ]

        }))

        // await queryRunner.createTable(new Table({
        //     name: 'general_company',
        //     columns: [
        //         new TableColumn({
        //             name: 'id_general_company',
        //             type: 'int',
        //             isPrimary: true,
        //             isGenerated: true,
        //             generationStrategy: 'increment',
        //             isNullable: false
        //         }),
        //
        //         new TableColumn({
        //             name: 'company_name',
        //             type: 'varchar(255)'
        //         })
        //
        //     ]
        // }))
        
        await queryRunner.createForeignKey("general_product", new TableForeignKey(
            {
            name: "id_general_company_FK",
            referencedTableName: 'general_company',
            referencedColumnNames: ["id_general_company"],
            columnNames: ["id_general_company"]
            }
            
        ))
        
        await queryRunner.createForeignKey("general_product", new TableForeignKey({
            name: "id_equipment_type_FK",
            referencedTableName: 'equipment_type',
            referencedColumnNames: ['id_equipment_type'],
            columnNames: ['id_equipment_type']
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("general_product", "id_equipment_type_FK")
        await queryRunner.dropForeignKey("general_product", "id_general_company_FK")
        await queryRunner.dropTable("general_product")
    }

}
