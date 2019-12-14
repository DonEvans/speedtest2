class ApplicationController < ActionController::Base

  def hello
    render html: "Hello from speedtest2!"
  end
end
