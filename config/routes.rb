Rails.application.routes.draw do
  root 'page#index'
  get 'computers/index'
  get 'computers/show'
  get 'computers/new'
  get 'computers/create'
  get 'computers/edit'
  get 'page/index'
  get 'page/languages'
  get 'page/browsers'
end
