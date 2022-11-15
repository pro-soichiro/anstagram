class User < ApplicationRecord
  has_one :birthplace
  belongs_to :department

  with_options presence: true do
    validates :last_name
    validates :first_name
    validates :last_name_kana
    validates :first_name_kana
    validates :nickname
    validates :gender
    validates :birthday
    validates :date_of_join
  end
end