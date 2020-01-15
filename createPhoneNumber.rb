#Write a function that accepts an array of 10 integers (between 0 and 9)
#returns a string of those numbers in the form of a phone number.


def createPhoneNumber(numbers)
  #TODO
"(%d%d%d) %d%d%d-%d%d%d%d" % numbers
 # numbers.insert(-1, '(').insert(2, ')').insert(-5, '-')
end