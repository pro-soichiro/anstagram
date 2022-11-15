class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :last_name, null: false
      t.string :first_name, null: false
      t.string :last_name_kana, null: false
      t.string :first_name_kana, null: false
      t.string :nickname, null: false
      t.integer :gender, null: false
      t.date :birthday, null: false
      t.references :department, null: false, foreign_key: true
      t.date :date_of_join, null: false
      t.string :hobby
      t.string :skill
      t.text :motto
      t.text :career
      t.text :memo

      t.timestamps
    end
  end
end
