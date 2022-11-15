module Api
  module V1
    class DepartmentsController < ApplicationController

      def index
        departments = Department.all

        render json: {
          departments: departments
        }, status: :ok
      end

    end
  end
end