class SecretSpotsController < ApplicationController
    def index
        spots = SecretSpot.all
        render json: spots
    end

end
