# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create(description: "Home sweet home.",
             lat: 37.777106,
             lon: -122.407446,
             number_of_seats: 5
            )
Bench.create(description: "good place to learn",
             lat: 37.791581,
             lon: -122.393366,
             number_of_seats: 3
            )
Bench.create(description: "lots of water nearby",
             lat: 37.796129,
             lon: -122.393435,
             number_of_seats: 8
            )
Bench.create(description: "friendly park",
             lat: 37.708394,
             lon: -122.413369,
             number_of_seats: 2
            )
