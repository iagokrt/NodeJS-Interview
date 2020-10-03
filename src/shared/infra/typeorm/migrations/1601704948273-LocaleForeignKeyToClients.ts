import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export default class LocaleForeignKeyToClients1601704948273
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'clients',
      new TableColumn({
        name: 'locale_id',
        type: 'uuid',
        isNullable: true
      })
    );

    await queryRunner.createForeignKey(
      'clients',
      new TableForeignKey({
        name: 'ClientLocaleReference',
        columnNames: ['locale_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'locales',
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('clients', 'ClientLocaleReference');

    await queryRunner.dropColumn('clients', 'locale_id');
  }
}
