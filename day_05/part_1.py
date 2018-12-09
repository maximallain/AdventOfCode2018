import string
import string
string.ascii_lowercase

with open('input.txt', 'r') as f :
	txt = f.readlines()[0]
#txt = 'dabAcCaCBAcCcaDA'
i=0
print(txt[:50])

while i < len(txt)-1:
	first = txt[i]
	second = txt[i+1]
	same_letter = (first.lower() == second.lower())
	if same_letter :

		is_first_min = (first == first.lower())
		is_second_min = (second == second.lower())
		if is_second_min != is_first_min :
			txt = txt[:i]+txt[i+2:]
			i = i-1
		else :
			i += 1
	else :
		i += 1
print(len(txt))
