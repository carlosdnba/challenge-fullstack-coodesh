import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class pullUpDatabase1676128644201 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'transactions',
            columns: [
                {
                    name: 'id',
                    type: 'string',
                    unsigned: true,
                    isPrimary: true,
                },
                {
                    name: 'type',
                    type: 'integer',
                },
                {
                    name: 'date',
                    type: 'string',
                },
                {
                    name: 'product',
                    type: 'varchar',
                },
                {
                    name: 'value',
                    type: 'integer',
                },
                {
                    name: 'salesPerson',
                    type: 'varchar',
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
