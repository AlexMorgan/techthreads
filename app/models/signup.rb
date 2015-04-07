class Signup < ActiveRecord::Base
  validates :email, :email => true,  uniqueness: true
  # before_save :acquire_request_params

  def acquire_request_params(request)
    self.user_agent = request.env["HTTP_USER_AGENT"]
    self.ip_address = request.remote_ip
    self.save
  end
end
