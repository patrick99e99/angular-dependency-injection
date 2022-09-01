class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  def show
    render html: '', layout: 'application'
  end
end
