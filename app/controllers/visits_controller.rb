class VisitsController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity     

    def index
        visits = current_user.visits.order(:secret_spot_id)
        render json: visits
    end

    def show
        visit = current_user.visits.find_by(id: params[:id])
        if visit
            render json: visit
        else
            render json: { error: "Visit not found" }, status: :unauthorized
        end
    end

    def create
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
    
    private 
    def visit_params
        params.permit(:date, :note, :secret_spot_id, :user_id, :id, :visit)
    end

end
