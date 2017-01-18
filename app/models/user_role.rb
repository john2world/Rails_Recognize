class UserRole < ActiveRecord::Base
  attr_accessible :role_id, :user_id
  belongs_to :user

  def role
    Role.find(role_id)
  end
end
