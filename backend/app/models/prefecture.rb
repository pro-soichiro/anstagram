class Prefecture < ApplicationRecord
  # has_many :birthplaces
  # has_many :users, through: birthplaces

  validates :name, presence: true
end