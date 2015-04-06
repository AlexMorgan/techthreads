class Signups < ActiveRecord::Migration
  def change
    create_table :signups do |t|
      t.string :email, :ip_address, :user_agent, :referred_url

      t.timestamps
    end

    add_index :signups, :email, unique: true
  end
end
