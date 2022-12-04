# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name: "Jace", email: "jace@gmail.com", password: "abc")
u2 = User.create(name: "Luke", email: "luke@gmail.com", password: "abc")
u3 = User.create(name: "Baela", email: "baela@gmail.com", password: "abc")


s1 = SecretSpot.create(name: "The floating map on Green street", location: "110 Greene Street", description: "A work of art by Belgian artist and architect Françoise Schein", cost: 0.00)
s2 = SecretSpot.create(name: "Freedom Tunnel", location: "St. Claire Place west to the Hudson Parkway off-ramp", description: "the graffiti artist Chris 'Freedom' Pape used the tunnel walls to create some of his most notable artwork", cost: 0.00)
s3 = SecretSpot.create(name: "Chinese Scholar Garden", location: "Staten Island", description: "Beautiful garden!", cost: 13.99)

v1 = Visit.create(date: "11/30/2022", note: "First visit.", secret_spot: s1, user: u1)
v2 = Visit.create(date: "12/1/2022", note: "Active train track.", secret_spot: s2, user: u1)
v3 = Visit.create(date: "12/2/2022", note: "Exciting!", secret_spot: s2, user: u2)
v4 = Visit.create(date: "12/3/2022", note: "Need to buy a ticket.", secret_spot: s3, user: u3)

puts "✅ Done seeding!"
