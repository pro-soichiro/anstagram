module Api
  module V1
    class UsersController < ApplicationController

      def index
        users = User.all.map do |user|
          {
            id: user.id,
            full_name: user.full_name,
            full_name_kana: user.full_name_kana
          }
        end

        render json: {
          users: users
        }, status: :ok
      end


      def show
        user_data = User.find(params[:id])

        user = {
            id: user_data.id,
            full_name_kana: user_data.full_name_kana,
            full_name: user_data.full_name,
            nickname: user_data.nickname,
            gender: user_data.gender_i18n,
            departments: user_data.departments.map(&:name),
            birthday: I18n.l(user_data.birthday),
            age: user_data.age,
            date_of_join: I18n.l(user_data.date_of_join),
            birthplace_name: user_data.birthplace.prefecture.name,
            birthplace_detail: user_data.birthplace.detail,
            hobby: user_data.hobby,
            skill: user_data.skill,
            motto: user_data.motto,
            career: user_data.career,
            memo: user_data.memo,
        }

        render json: {
          user: user
        }, status: :ok
      end
    end
  end
end