module Api::V1
  class EmployeesController < ApplicationController
    def index
      @output = []
      
      Employee.roots.each do |emp|
        @output << data(emp)
       
      end
      render json: @output
    end

    def data(employee)
      subordinates = []
      unless employee.subs.blank?
        employee.subs.each do |emp|
          subordinates << data(emp)
        end
      end
      { id: employee.id, first_name: employee.first_name, last_name:employee.last_name, title: employee.title, manager_id:employee.manager_id, subordinates: subordinates}
    end


    def create
      @employee = Employee.create(employee_params)  
    end

    def show
      @employee = Employee.find(params[:id])
      render json: @employee
    end

    def destroy
      @employee = Employee.destroy(params[:id])

    end

    def update
      @employee = Employee.find(params[:id])
      @employee.update_attributes(employee_params)
    end
    
    private
    
      def employee_params
        params.require(:employee).permit(:id, :first_name, :last_name, :title, :manager_id)
      end


  end
end