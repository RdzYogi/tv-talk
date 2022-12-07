class Message < ApplicationRecord
  belongs_to :user

  after_create_commit { broadcast_append_to "messages"}
end
