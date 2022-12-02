class Visit < ApplicationRecord
    belongs_to :user
    belongs_to :secret_spot

    # validates :date, presence: true
end
