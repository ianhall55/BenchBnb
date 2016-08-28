class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all
    render :index
  end

  def show
    @bench = Bench.findById(params[:id])
    render :show
  end

  def create

  end

end
