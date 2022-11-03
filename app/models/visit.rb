class Visit < ApplicationRecord
    belongs_to :users
    belongs_to :secret_spots
end
