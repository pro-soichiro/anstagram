module Api
  module V1
    module Users
      class DepartmentsController < ApplicationController

        def index
          departments = Department.preload(:users)

          department_users = departments.map do |department|
            {
              id: department.id,
              name: department.name,
              total: department.users.size
            }
          end

          render json: {
            department_users: department_users
          }, status: :ok
        end

        def show
          department = Department.find(params[:id])
          users = department.users

          department_users = users.map do |user|
            {
              id: user.id,
              full_name: user.full_name,
              full_name_kana: user.full_name_kana
            }
          end

          render json: {
            department: {
              id: department.id,
              name: department.name,
              total: users.size,
              department_users: department_users,
            },
          }, status: :ok
        end

      end
    end
  end
end