class Bench < ActiveRecord::Base
  validates :description, :lat, :lon, :number_of_seats, presence: true

  def self.in_bounds(bounds)
  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
    Bench.where('lat BETWEEN ? AND ?',
              bounds['southWest']['lat'],
              bounds['northEast']['lat']
            ).where('lon BETWEEN ? AND ?',
              bounds['southWest']['lng'],
              bounds['northEast']['lng']
            )
  end
end
