class User < ApplicationRecord
  has_one :birthplace, dependent: :destroy
  has_many :user_departments, dependent: :destroy
  has_many :departments, through: :user_departments

  enum gender: %i[man woman]

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

  def full_name
    last_name + first_name
  end

  def full_name_kana
    last_name_kana + first_name_kana
  end

  def age
    conv_today = Date.today.strftime("%Y%m%d").to_i
    conv_birthday = birthday.strftime("%Y%m%d").to_i

    ( conv_today - conv_birthday ) / 10000
  end
end