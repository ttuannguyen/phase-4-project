# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(name: "Jace")
u2 = User.create(name: "Luke")
u3 = User.create(name: "Anne")


s1 = SecretSpot.create(name: "Fountain", location: "Manhattan", description: "A fun place to cool off", cost: 0)
s2 = SecretSpot.create(name: "Abandoned Subway", location: "Brooklyn", description: "Good for pictures", cost: 0)
s3 = SecretSpot.create(name: "Food Court", location: "Queens", description: "food heaven", cost: 0)
