require 'sinatra'

set :root, File.dirname(__FILE__)
set :public_folder, 'static'
get "/" do
  redirect 'index.html'
end
