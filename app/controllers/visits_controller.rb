class VisitsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity     
    before_action :authorize

    def index
        visits = current_user.visits
        render json: visits
    end

    def show
        # TODO: what if we specific the user's spot's visit here
        visit = current_user.visits.find_by(id: params[:id])
        if visit
            render json: visit
        else
            render json: { error: "Visit not found" }, status: :unauthorized
        end
    end

    def create
        # TODO: associate the secret spot with the visit 
        # secret_spot = SecretSpot.find_by(name: params[:name])

        # METHOD 3: rescue at the top
        visit = current_user.visits.create!(visit_params) #bang operator to raise exception to hit RecordInvalid
        render json: visit, status: :accepted
        # byebug

        # METHOD 2: ActiveRecord::RecordInvalid
    #     visit = current_user.visits.create!(visit_params) #bang operator to raise exception to hit RecordInvalid
    #     render json: visit, status: :accepted
    # rescue ActiveRecord::RecordInvalid => invalid #creating invalid param
    #     byebug
    #     render json: {error: invalid.record.errors}, status: :unprocessable_entity
        
        # METHOD 1: .invalid
        # visit = current_user.visits.create(visit_params)
        # byebug # run visit.valid visit.errors visit.full_messages
        #     if visit.valid?
        #     render json: visit, status: :accepted
        # else
        #     render json: { errors: visit.errors.full_messages }, status: :unprocessable_entity
        # end

        # secret_spot = SecretSpot.find_by(name: params[:secret_spot])
        # visit = Visit.create(
        #     secret_spot_id: params[:secret_spot_id],
        #     date: params[:date],
        #     note: params[:note],
        #     user_id: current_user[:id]
        # )
        # render json: visit
    end

    def update
        # TODO: add condition logic for error handling 
        visit = current_user.visits.find_by(id: params[:id])
        if visit 
            visit.update(visit_params)
            render json: visit, status: :accepted
        else
            render json: {error: "Unable to update"}, status: :not_found
        end
    end

    def destroy
        # TODO: add condition logic for error handling 
        visit = current_user.visits.find_by(id: params[:id])
        visit.destroy
        head :no_content # indicating a successful request
        
        # if visit 
        #     visit.destroy
        #     head :no_content # indicating a successful request
        # else
        #     render json: {error: "visit not found"}, status: :not_found
        # end

    end

    private 

    def render_unprocessable_entity(invalid) # pass in the invalid param
        # byebug
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end


    def current_user
        # byebug
        User.find_by(id: session[:user_id])
    end
    
    def visit_params
        params.permit(:date, :note, :secret_spot_id)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
