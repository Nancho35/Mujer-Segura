module Api
  module V1
    class CentrosController < ApplicationController
      def index
        @centros = Centro.order('created_at DESC')
      end
    end
  end
end
