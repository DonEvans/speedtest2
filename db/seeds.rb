# Create a main sample computer.
Computer.create!(userName:  "Example User",
                  category: "Desktop",
                  browser: "Firefox",
                  userAgentString: "Mozilla",
                  description: "A test computer",
                  time: 200)

# Generate a bunch of additional users.
29.times do |n|
  userName  = Faker::Name.name
  categories = %w{ Desktop Laptop Tablet Phone Other }
  category = categories[rand(5)]
  browsers = %w{ Chrome Firefox Safari Edge Internet_Explorer Opera Android Samsung_Internet UC_Browser Other }
  browser = browsers[rand(10)]
  description = Faker::Lorem.sentence(word_count: 6)
  time = rand(500)
  Computer.create!(userName:  userName,
               category: category,
               browser: browser,
               userAgentString: "Mozilla",
               description: description,
               time: time)
end
