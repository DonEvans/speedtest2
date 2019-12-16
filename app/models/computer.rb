class Computer < ApplicationRecord
  validates :userName, presence: true, length: { maximum: 60 }
  validates :category, presence: true, length: { maximum: 60 }
  validates :browser, presence: true, length: { maximum: 60 }
  validates :userAgentString, presence: true, length: { maximum: 255 }
  validates :time, presence: true
  validates_numericality_of :time
  validates :description, length: { maximum: 126 }
end
