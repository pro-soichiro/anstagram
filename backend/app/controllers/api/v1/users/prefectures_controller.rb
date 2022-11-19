module Api
  module V1
    module Users
      class PrefecturesController < ApplicationController

        def index
          prefectures = Prefecture.preload(:users)

          prefecture_users = prefectures.map do |prefecture|
            {
              id: prefecture.id,
              name: prefecture.name,
              total: prefecture.users.size
            }
          end

          render json: {
            prefecture_users:  prefecture_users
          }, status: :ok
        end

        def show
          prefecture = Prefecture.find(params[:id])
          users = prefecture.users

          prefecture_users = users.map do |user|
            {
              id: user.id,
              full_name: user.full_name,
              full_name_kana: user.full_name_kana
            }
          end

          render json: {
            prefecture: {
              id: prefecture.id,
              name: prefecture.name,
              total: users.size,
              prefecture_users: prefecture_users,
            },
          }, status: :ok
        end

      end
    end
  end
end