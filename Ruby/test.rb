=begin
=begin  # coments w Ruby caly text to   =begin ...... =end
puts 'what is your first name'

first_name = gets.chomp  #input do pamieci komputer czeka na wprowadzenie danych

 puts "Your firs name is #{ first_name }."  #print danych z uzyciem inputa

p "What is your surname?"  #put input same laine

surname = gets.chomp     #pozwala wprowadzic dane program czeka

puts "Your surname is #{surname}"   #print surname

puts "Your ful name is #{first_name} #{surname}" # print wydruk dwoch inputow w jednej lini

puts "what is your addres"       #analogicznie jak name and surname

address = gets.chomp

puts "Your ful name is #{first_name} #{surname} and address is #{address}"
=end
=begin
if 13 > 1
  puts "first it is bigger number"
else
  puts "secend is bigger"
end
=end
=begin
grade = "A"
if grade == 'A'
  puts "You are killing it"
elsif grade == 'B'
  puts "You are coasting fine"
elsif grade == 'C'
  puts "Acceptable"
else
  puts "Plase see me after class"
=end

#unless statment   (jesli nie, chyba ze)
=begin
x = 10
unless x > 2
  puts "x is less than 2"
else
  puts "x is greater than 2"
end
=end
#case statments jak case A to zrob to, jak case B to zrob B leci od gory
=begin
grade = 'A'
case grade
when 'A'
  p 'You are killing it'
when 'B'
  p 'You are coasting fine'
when 'C'
  p 'Acceptable'
else
  p 'Plase see me after class'
end
=end
=begin
score = 2
case score
when 1
  puts "you got 1score"
when 2
  puts "you got 2score"
end
=end
                                           #Cwiczenia
=begin
print "Plase enter you age: "
age = gets.to_i
if age < 18
  puts "You to yong for drink"
else
  puts "OK You can buy drink"
end
=end


=begin
#Ask user what is current temperature i stworzenie nowego varible curent_temperature
print "What is current temperature: "                #wydruk zapytania
curent_temperature = gets.to_i                       #przygotowanie do wprowadzenia current temperatury

print "Is A/C is work 'y' for yes 'n' for no :"      #wydruk zapytania czy czy A/C work
ac_working = gets.downcase[0]                        #przygotowanie do wprowadzenia zapytania

print "What is desire temp: "
desired_temperaturer = gets.to_i

 if ac_working == 'y'               #jesli AC work
   if curent_temperature > desired_temperaturer        #curent temp jest wieksza od desire
     puts 'Turn A/C Plase'                             #print Turn A/C
   end                                                 #ale jesli nie dziala to
 else
   if curent_temperature > desired_temperaturer        #porownanie jak nie dziala to
     puts "Fix A/C now It's hot !!!"
   else
     puts "Fix the A/C when you have time It's cool "  #jak nie dziala i nie to to drukuj to
   end
 end
=end

=begin
print "What suberb you live: "     #to jest condition dzieki ktoremu jak odpowiemy tak jak jest przewidziane  to
suberb = gets.chomp.downcase       # odpowiedz jest powazana z odpowiedzia
case suberb                      # rodzaj condition
when 'engadine'                    # zadany input
  puts 'best suberb in Sydney'
when 'mosman'
  puts 'good area'
else
  puts 'mayby this is nice area to'
end
=end

#WHILE LOOP
=begin
i = 0
while i < 5
  puts "i: #{i}"
  i += 1
end
=end

## ITERATORS POWTORZENIA
=begin
5.times do
  puts 'robert'      #piec 5 razy wyswietli 'robert'
end

5.times do |i|       #liczy w gore do pieciu
  puts "i: #{i}"
end

5.downto(3) do |i|     #odlicz w dol do trzech
  puts "i: #{i}"
end

##  FOR LOOPS
for i in 10..15
  puts "i: #{i}"
end
=end
#--------------------Methods-----------------------------------
#Methods with out arguments
=begin
def hello
  puts "hello"
end
hello
=end

#Methods with arguments
=begin
def hello(name)
  puts "Hello, #{name}"
end
hello "Robert"       #dwie wersje for call function
hello("Robert")
=end

#Methods with default arguments
=begin
def hello (name = "World")
puts "Hello, #{name}"
end
hello

hello("Josh")

3.times{hello("Josh")}
=end


puts "Robert Maculewicz"
def dodawanie(a, b)
  return a + b
end

puts dodawanie(123, 12312)
