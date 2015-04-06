class Signup < ActiveRecord::Base
  validates :email, :email => true,  uniqueness: true

  def acquire_request_params(request)
    user_agent = request.env["HTTP_USER_AGENT"]
    remote_ip = request.remote_ip
    binding.pry
  end
end
