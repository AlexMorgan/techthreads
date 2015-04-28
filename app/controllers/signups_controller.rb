class SignupsController < ApplicationController

  def create
    @signup = Signup.new(signup_params)

    @signup.referred_url = params['signup']['referred_url']

    respond_to do |format|
      if @signup.save
        @signup.acquire_request_params(request)
        @signup.create_referrer_id
        format.html { redirect_to :back, notice: "Thanks for believing in our mission" }
        format.json { render json: {signup: @signup} }
      else
        format.html { redirect_to :back }
        format.json { render json: @signup.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def signup_params
    params.require(:signup).permit(:email, :referrer_id)
  end
end
