Rails.application.routes.draw do
  
  get "secret_spots", to: "secret_spots#index"
  get "users", to: "users#index"
  get "visits", to: "visits#index"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


end
