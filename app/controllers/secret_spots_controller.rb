class SecretSpotsController < ApplicationController
    def index
        # secret_spots = SecretSpot.all
        # render json: secret_spots
        render json: SecretSpot.all, status: :ok
    end

    def show
        secret_spot = SecretSpot.find(params[:id])
        render json: secret_spot
        # if secret_spot
        #     render json: secret_spot, status: :ok
        # else
        #     render json: { error: "secret spot not found", status: :not_found}
        # end
    end

    def create
        secret_spot = SecretSpot.create(params)
        render json: secret_spot
    end

end
