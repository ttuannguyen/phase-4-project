Rails.application.routes.draw do
  

  resources :secret_spots, only:[:index, :show, :create, :solution]
  resources :users, only:[:index, :show, :create]
  resources :visits



  # for testing
  # get "/users/:user_id/visits", to: "users#visits_index"
  # get "/users/:user_id/visits/:visit_id", to: "users#visits_index_visit"

   # visits CRUD
  post "/users/:user_id/visits", to: "visits#create"
  patch "/users/:user_id/visits/:id", to: "visits#update"
  delete "/users/:user_id/visits/:id", to: "visits#destroy"


  # get a secret
  get "/users/:user_id/visits", to: "users#visits_index"

  post "/solution", to: "visits#solution"


  # routes to handle user
  post "/signup", to: "users#create" 
  get "/me", to: "users#show"
  
  # routes to handle sessions login and logout
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
