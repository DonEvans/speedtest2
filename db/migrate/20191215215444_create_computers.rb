class CreateComputers < ActiveRecord::Migration[6.0]
  def change
    create_table :computers do |t|
      t.string :userName
      t.string :category
      t.string :browser
      t.string :userAgentString
      t.string :description
      t.integer :time

      t.timestamps
    end
  end
end
