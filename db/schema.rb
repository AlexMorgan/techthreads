# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150427021354) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "signups", force: true do |t|
    t.string   "email"
    t.string   "ip_address"
    t.string   "user_agent"
    t.string   "referred_url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "referrer_id"
    t.string   "referral_id"
  end

  add_index "signups", ["email"], name: "index_signups_on_email", unique: true, using: :btree

end
