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

      def create
        department = Department.new(department_params)
        if department.save!
          render json: {}, status: :created
        else
          render json: {
            department: department
          }, status: :bad_request
        end
      end

      def update
        department = Department.find(params[:id])
        if department.update!(department_params)
          render json: {}, status: :ok
        else
          render json: {
            department: department
          }, status: :bad_request
        end
      end

      def destroy
        department = Department.find(params[:id])
        if department.destroy!
          render json: {}, status: :ok
        else
          render json: {
            department: department
          }, status: :bad_request
        end
      end

      private

      def department_params
        params.require(:department).permit(:name, :description)
      end
    end
  end
end