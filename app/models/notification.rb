class Notification < ApplicationRecord
  has_many :replies
  belongs_to :user
end
