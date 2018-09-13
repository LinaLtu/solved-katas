# https://www.codewars.com/kata/play-with-two-strings

def reverse_letters(a, b)

  a.each_char do |char|

  p b.gsub!(Regexp.new(char, Regexp::IGNORECASE)) {|char_b| char_b.swapcase}

  end

  return b

end

   modified_b = reverse_letters("ab", "aba");
   modified_a = reverse_letters(modified_b, "ab");

   result = modified_a + modified_b

   p result
