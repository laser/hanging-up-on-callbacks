require 'rubygems'
require 'bundler'

Bundler.require

#\ -w -p 8080

require './app.rb'
run Sinatra::Application
