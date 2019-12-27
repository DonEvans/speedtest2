class ComputersController < ApplicationController
  def index
    @computer = Computer.all
  end

  def show
    @computer = Computer.find(params[:id])
  end

  def new
    @computer = Computer.new
  end

  def create
    @computer = Computer.new(user_params)
    if @computer.save
      redirect_to computer_url(@computer)
    else
      render 'new'
    end
  end

  def edit
  end


    private

      def user_params
        params.require(:computer).permit(:userName, :category, :browser,
                     :userAgentString, :description, :time)
      end
end
