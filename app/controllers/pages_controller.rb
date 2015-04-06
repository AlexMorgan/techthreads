class PagesController < ApplicationController
  def landing
    @signup = Signup.new
  end
end
