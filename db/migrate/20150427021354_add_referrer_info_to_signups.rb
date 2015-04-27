class AddReferrerInfoToSignups < ActiveRecord::Migration
  def change
    add_column :signups, :referrer_id, :string
    add_column :signups, :referral_id, :string
  end
end
