exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_detail', (table) => {
    table.string('user_detail_id').primary();
    table.string('user_detail_postal_code');
    table.string('user_detail_address');
    table.string('user_detail_unit_number');
    table.string('user_detail_city');
    table.string('user_detail_province');
    table.string('user_detail_country');
    table.string('user_detail_phone');
    table.string('user_detail_picture');
    table.decimal('user_detail_latitude', 9, 6);
    table.decimal('user_detail_longitude', 9, 6);
    table.string('user_detail_user_id').references('user_id').inTable('users');
    table.datetime('user_detail_deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_detail');
};