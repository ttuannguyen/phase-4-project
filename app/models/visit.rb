class Visit < ApplicationRecord
    belongs_to :user
    belongs_to :secret_spot
end
