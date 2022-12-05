class Reply < ApplicationRecord
  belongs_to :post
  belongs_to :user
  belongs_to :notification, optional: true

  has_one_attached :photo
end
