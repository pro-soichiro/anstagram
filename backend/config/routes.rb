Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      namespace :users do
        resources :prefectures, only: %i[index show]
        resources :departments, only: %i[index show]
      end
      resources :users
      resources :prefectures, only: %i[index]
      resources :departments
    end
  end
end
