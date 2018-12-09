import string
import string


def len_after_transformation(txt):
	i=0
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
	return len(txt)


with open('input.txt', 'r') as f :
	txt = f.readlines()[0]
#txt = 'dabAcCaCBAcCcaDA'
print(txt[:-10])

res = 1000000
for letter in list(string.ascii_lowercase.replace('i','')):
	print(letter)

	txt_temp = txt.replace(letter,'').replace(letter.upper(),'')
	print(len(txt_temp))
	res_temp = len_after_transformation(txt_temp)
	if res > res_temp:
		res = res_temp
print(res)

