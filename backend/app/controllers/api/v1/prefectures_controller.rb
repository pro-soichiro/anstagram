module Api
  module V1
    class PrefecturesController < ApplicationController

      def index
        prefectures = Prefecture.all

        render json: {
          prefectures: prefectures
        }, status: :ok
      end

    end
  end
end