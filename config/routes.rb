Rails.application.routes.draw do
  root 'page#index'
  get 'computers/index'
  get '/results', to: 'computers#index'
  get '/test', to: 'computers#new'
  get 'computers/create'
  get 'computers/edit'
  get '/languages', to: 'page#languages'
  get '/systems', to: 'page#systems'
  get '/multi', to: 'page#multi'
  resources :computers
end
