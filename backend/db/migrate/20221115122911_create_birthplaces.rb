class CreateBirthplaces < ActiveRecord::Migration[6.1]
  def change
    create_table :birthplaces do |t|
      t.references :prefecture, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.text :detail

      t.timestamps
    end
  end
end
