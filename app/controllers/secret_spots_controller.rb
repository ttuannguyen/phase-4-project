class SecretSpotsController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorized, only: [:index]    

    # GET "/secret_spots"
    def index
        render json: SecretSpot.all
    end
    

    # GET "/secret_spots/:id"
    def show
        secret_spot = SecretSpot.find_by(id: params[:id])
        # secret_spot = current_user.secret_spots.find_by(id: params[:id])
        # render json: secret_spot
        if secret_spot
            render json: secret_spot.to_json, status: :ok
        else
            render json: { error: "Secret spot not found", status: :unauthorized}
        end
    end

    # POST "/secret_spots"
    def create

        # METHOD 3: rescue at the top
        secret_spot = SecretSpot.create!(secret_spot_params) #bang operator to raise exception to hit RecordInvalid
        render json: secret_spot, status: :created
        # byebug        
        
        # METHOD 2: ActiveRecord::RecordInvalid
    #     secret_spot = SecretSpot.create!(secret_spot_params) #bang operator to raise exception to hit RecordInvalid
    #     render json: secret_spot, status: :created
    # rescue ActiveRecord::RecordInvalid => invalid # creating invalid param
    #     byebug
    #     render json: { errors: secret_spot.errors.full_messages }, status: :unprocessable_entity

        # METHOD 1: .invalid
        # secret_spot = SecretSpot.create(secret_spot_params)
        # byebug # run visit.valid visit.errors visit.full_messages
        # if secret_spot.valid?
        #     render json: secret_spot, status: :created
        # else
        #     render json: { errors: secret_spot.errors.full_messages }, status: :unprocessable_entity
        # end
    end


    private 
    # def current_user
    #     # byebug
    #     User.find_by(id: session[:user_id])
    # end

    def secret_spot_params
        params.permit(:name, :location, :description, :cost)
    end

    # def render_unprocessable_entity(invalid) # pass in the invalid param
    #     # byebug
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end

    # def authorize
    #     return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    # end

end