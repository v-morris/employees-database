class Employee < ApplicationRecord
    has_many :subs, class_name: 'Employee', foreign_key: :manager_id
    belongs_to :superior, class_name: 'Employee', foreign_key: :manager_id, optional: true
    scope :roots, -> { where(manager_id: nil) }
end
