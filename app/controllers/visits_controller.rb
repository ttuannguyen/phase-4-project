class VisitsController < ApplicationController
    
    before_action :authorize

    def index
        visits = current_user.visits
        render json: visits
    end

    def show
        visit = current_user.visits.find_by(id: params[:id])
        if visit
            render json: visit, status: :ok
        else
            render json: { error: "Visit not found" }, status: :unauthorized
        end
    end

    def create
        visit = current_user.visits.create(visit_params)
        if visit.valid?
            render json: visit
        else
            render json: { errors: visit.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        # to revisit
        visit = Visit.find_by(id: params[:id])
        visit.update(params)
        render json: visit
    end

    def destroy
        # to revisit
        visit = Visit.find_by(id: params[:id])
        visit.destroy
        head :no_content 
    end

    private 

    def current_user
        User.find_by(id: session[:user_id])
    end
    
    def visit_params
        params.permit(:date, :note)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
