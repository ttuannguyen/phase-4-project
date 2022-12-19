class VisitsController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity     

    def index
        visits = current_user.visits.order(:secret_spot_id)
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
        visit = current_user.visits.create!(visit_params) 
        render json: visit, status: :created

    end

    def update
        visit = current_user.visits.find_by(id: params[:id])
        if visit 
            visit.update!(visit_params)
            render json: visit, status: :accepted
        else
            render json: {error: "Unable to update"}, status: :not_found
        end
    end

    def destroy
        visit = current_user.visits.find_by(id: params[:id])
        visit.destroy
        head :no_content
    end
    
    
    
    # def destroy
    #     # TODO: add condition logic for error handling 
    #     visit = current_user.visits.find_by(id: params[:id])
    #     visit.destroy
    #     head :no_content # indicating a successful request
        
    #     # if visit 
    #     #     visit.destroy
    #     #     head :no_content # indicating a successful request
    #     # else
    #     #     render json: {error: "visit not found"}, status: :not_found
    #     # end

    # end

    private 

    # def render_unprocessable_entity(invalid) # pass in the invalid param
    #     # byebug
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end

    # def current_user
    #     # byebug
    #     User.find_by(id: session[:user_id])
    # end
    
    def visit_params
        params.permit(:date, :note, :secret_spot_id)
    end

end
