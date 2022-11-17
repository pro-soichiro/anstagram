module Api
  module V1
    class DepartmentsController < ApplicationController

      def index
        departments = Department.all

        render json: {
          departments: departments
        }, status: :ok
      end

      def show
        department = Department.find(params[:id])

        render json: {
          department: department
        }, status: :ok
      end

      def new
      end

      def edit
      end

      def create
      end

      def update
      end

      def destroy
      end

    end
  end
end