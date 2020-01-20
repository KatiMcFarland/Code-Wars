# count = []
# n.times do
#   "0100010000100001111101101000111110000001101001010"
#   when n == 1
#   count += 1
# end
# count 
# end 
# end
def count_bits(n)
n.to_s(2).chars.map(&:to_i).inject(:+)
end