class AddColumnToUser < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :notification, null: false, foreign_key: true
  end
end
