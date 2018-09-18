# Hackerrank url - https://www.hackerrank.com/challenges/compare-the-triplets/problem

a_triplet = gets.strip.split(' ').map(&:to_i)
b_triplet = gets.strip.split(' ').map(&:to_i)

alice_points = 0
bob_points = 0

a_triplet.zip(b_triplet).each do |a_val, b_val|
  if a_val > b_val
    alice_points += 1
  elsif a_val < b_val
    bob_points += 1
  end
end

puts "#{alice_points} #{bob_points}"
