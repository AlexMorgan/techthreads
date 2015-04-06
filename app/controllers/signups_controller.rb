class SignupsController < ApplicationController

  def create
    @signup = Signup.new(signup_params)
    if @signup.save
      @signup.acquire_request_params(request)
      ## Make Usermailer to email individuals once they have signed up
      # UserMailer.contact_form
      redirect_to root_path, notice: "Thank you for believing in our mission"
    else
      flash[:notice] = "There were errors with your submission"
      render "pages/landing"
    end

  end

  private

  def signup_params
    params.require(:signup).permit(:email)
  end
end
