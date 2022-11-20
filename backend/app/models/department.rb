class Department < ApplicationRecord
  has_many :user_departments, dependent: :restrict_with_error
  has_many :users, through: :user_departments

  validates :name, presence: true, uniqueness: true
end