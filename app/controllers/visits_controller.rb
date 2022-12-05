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
        # byebug
        # TODO: associate the secret spot with the visit 
        # secret_spot = SecretSpot.find_by(name: params[:name])
        # visit = current_user.visits.create(visit_params)
        # if visit.valid?
        #     render json: visit
        # else
        #     render json: { errors: visit.errors.full_messages }, status: :unprocessable_entity
        # end

        # byebug
        secret_spot = SecretSpot.find_by(name: params[:secret_spot])
        visit = Visit.create(
            date: params[:date],
            note: params[:note],
            user_id: current_user[:id],
            secret_spot_id: secret_spot[:id]
        )
        render json: visit
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
        # byebug
        User.find_by(id: session[:user_id])
    end
    
    # def visit_params
    #     params.permit(:date, :note)
    # end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
