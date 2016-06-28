class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
                                    params[:user][:username],
                                    params[:user][:password]
                                  )
    if @user
      login!(@user)
      render :show
    else
      render json: {base: ['invalid user credentials'], status: 401}
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: {base: ['no current user found'], status: 404}
    end
  end

end
