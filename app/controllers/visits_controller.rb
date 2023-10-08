class VisitsController < ApplicationController
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity    
    skip_before_action :authorized
    # skip_before_action :authorized, only: [:solution]

    # def solution
    #     # byebug
    #     # render json: "solution"
    #     solution = Visit.all.select do |v|
    #         v.note.include?(params[:note])
    #     end

    #     ss = solution.map do |v|
    #         v.secret_spot
    #     end

    #     if ss 
    #         render json: ss 
    #     else
    #         render json     
    # end

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
