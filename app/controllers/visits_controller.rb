class VisitsController < ApplicationController
    def index
        visits = Visit.all
        render json: visits
    end

    def show
        visit = Visit.find(params[:id]) 
        render json: visit
    end

    def create
        visit = Visit.create(params)
        render json: visit
    end

    def update
        #
    end

    def destroy
        #
    end

end
