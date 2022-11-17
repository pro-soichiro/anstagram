class Prefecture < ApplicationRecord
  has_many :birthplaces, dependent: :restrict_with_error
  has_many :users, through: :birthplaces

  validates :name, presence: true
end