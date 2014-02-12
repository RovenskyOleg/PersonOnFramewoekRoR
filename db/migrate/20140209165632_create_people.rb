class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :skype
      t.string :email
      t.string :phone
      t.string :age
      t.string :sex

      t.timestamps
    end
  end
end
