module Api
  module V1
    class UsersController < ApplicationController

      def index
        users = User.all

        render json: {
          users: users
        }, status: :ok
      end


      def show
        user = User.find(params[:id])

        render json: {
          user: user,
          birthplace: user.birthplace.prefecture.name,
          birthplace_detail: user.birthplace.detail,
          age: user.age,
          full_name: user.full_name,
          full_name_kana: user.full_name_kana,
          departments: user.departments.map(&:name)
        }, status: :ok
      end
    end
  end
end