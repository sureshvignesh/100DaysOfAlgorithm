# https://www.hackerrank.com/challenges/sherlock-and-squares/problem
#!/bin/ruby

require 'json'
require 'stringio'

# Complete the squares function below.
def squares(a, b)
    diff =  (Math.sqrt(b).ceil - Math.sqrt(a).ceil)
    diff = diff + 1 if  Math.sqrt(b) % 1 == 0
    # diff = diff + 1 if  Math.sqrt(a) % 1 == 0
    return diff
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

q = gets.to_i

q.times do |q_itr|
    ab = gets.rstrip.split

    a = ab[0].to_i

    b = ab[1].to_i

    result = squares a, b

    fptr.write result
    fptr.write "\n"
end

fptr.close()
